import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroupDirective, UntypedFormBuilder, UntypedFormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { StatistiqueService } from 'src/app/services/statistiqueService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-statistique-update',
  templateUrl: './statistique-update.component.html',
  styleUrls: ['./statistique-update.component.scss']
})
export class StatistiqueUpdateComponent implements OnInit {

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
    private statistiqueService: StatistiqueService,
    public dialog: MatDialog,
    // private loadingController: LoadingController,
    public dialogRef: MatDialogRef<StatistiqueUpdateComponent>,
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
      renvoiePossible: false,
      date_statistique: Date.now(),
    });
    console.log(this.Form, this.Form.errors, this.get(), this.data.ids);
  }

  get(){
    this.statistiqueService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  submit(values: any) {

    this.statistiqueService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as string;
        console.log(this.Listid);
        this.data = this.List;

        const deta = {
          idstatistique: this.Listid.idstatistique,
          nb_femme_votant : this.Listid.nb_femme_votant,
          nb_homme_votant : this.Listid.nb_homme_votant,
          nb_bulletin_null : this.Listid.nb_bulletin_null,
          motifRenvoi : this.Form.get('motifRenvoi')?.value,
          date_statistique : this.Form.get('date_statistique')?.value,
          renvoiePossible : this.Form.get('renvoiePossible')?.value,
          phase_electionEntity : {
            idPhase: this.Listid.phase_electionEntity.idPhase,
          },
          affectationagentEntity : {
            idAffectation: this.Listid.affectationagentEntity.idAffectation,
          },
          version : this.Listid.version,
          createdBy : this.Listid.createdBy,
          updatedBy : this.Listid.updatedBy,
        };
      
        this.isSubmitted = true;
        console.log(this.Form, this.data, deta);
        if(this.Form.valid)
        {
          this.statistiqueService.add(deta).subscribe(
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
