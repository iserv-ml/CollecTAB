import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroupDirective, UntypedFormBuilder, UntypedFormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { ResultatService } from 'src/app/services/resultatService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-resultat-update',
  templateUrl: './resultat-update.component.html',
  styleUrls: ['./resultat-update.component.scss']
})
export class ResultatUpdateComponent implements OnInit {

  List: any = [];
  Listid: any;

  isSubmitted = false;
  isLoading = false;
  Form!: UntypedFormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;

  matcher = new MyErrorStateMatcher();
  motifRenvoi = new FormControl('', [Validators.required,  Validators.minLength(3)]);

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private resultatService: ResultatService,
    public dialog: MatDialog,
    // private loadingController: LoadingController,
    public dialogRef: MatDialogRef<ResultatUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    this.Form = this.formBuilder.group({
      // suffrage: this.statistiqueService.getById(this.id).subscribe((res) => {
      //   return res.suffrage
      // }),
        motifRenvoi: this.motifRenvoi,
      // motifRenvoi: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      // renvoiePossible: false,
      date_statistique: Date.now(),
    });
    console.log(this.Form, this.Form.errors, this.get(), this.data.ids);
  }

  get(){
    this.resultatService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  submit(values: any) {

    this.resultatService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as string;
        console.log(this.Listid);
        this.data = this.List;

        const deta = {
          idResultat: this.Listid.idResultat,
          // nb_femme_votant : this.Listid.nb_femme_votant,
          motifRenvoi : this.Form.get('motifRenvoi')?.value,
          date_statistique : this.Form.get('date_statistique')?.value,
          suffrage: ['', Validators.compose([Validators.required, Validators.minLength(1)])],
          renvoiePossible: true,
          dateResultat: this.Listid.dateResultat,
          candidatEntity: this.formBuilder.group({
          valider: false,
          candidatEntity : {
            idCandidat: this.Listid.candidatEntity.idCandidat,
          },
          affectationagentEntity : {
            idAffectation: this.Listid.affectationagentEntity.idAffectation,
          },
        }),
          version : "admin",
          createdBy : "admin",
          updatedBy : "admin",
        };
      
        this.isSubmitted = true;
        console.log(this.Form, this.data, deta);
        if(this.Form.valid)
        {
          this.resultatService.add(deta).subscribe(
            (res) => {
              this.formDirective.resetForm();
              // this.presentLoading();
              this.List.unshift(this.data);
              this.get();
              this.close();
            }
          )
        }

      }
    );

  
}

close() {
  const dialogRef = this.dialog.closeAll();
  this.get()
}

}
