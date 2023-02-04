import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { rapportService } from 'src/app/services/rapportService';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroupDirective, UntypedFormBuilder, UntypedFormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-rapport-update',
  templateUrl: './rapport-update.component.html',
  styleUrls: ['./rapport-update.component.scss']
})
export class RapportUpdateComponent implements OnInit {

  List = [];
  Listid: any;

  isSubmitted = false;
  isLoading = false;
  Form!: UntypedFormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  
  matcher = new MyErrorStateMatcher();
  motifRenvoi = new FormControl('', [Validators.required,  Validators.minLength(3)]);

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private rapportService: rapportService,
    public dialog: MatDialog,
    // private loadingController: LoadingController,
    public dialogRef: MatDialogRef<RapportUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    this.Form = this.formBuilder.group({
      // suffrage: this.statistiqueService.getById(this.id).subscribe((res) => {
      //   return res.suffrage
      // }),
        motifRenvoi: this.motifRenvoi,
        renvoiePossible: 'true',
        dateRapport: Date.now(),
    });
    console.log(this.Form, this.Form.errors, this.get(), this.data.ids);
  }

  get(){
    this.rapportService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  get errorControl() {
    return this.Form.controls;
  }

  submit(values: any) {

      this.rapportService.getById(this.data.ids).subscribe(
        (res) => {
          this.Listid = res as string;
          console.log(this.Listid);
          // this.data = this.List;

          const deta = {
            idrapport: this.data.ids,
            contenu : this.Listid.contenu,
            heureOuverture : this.Listid.heureOuverture,
            tauxParticipation : this.Listid.tauxParticipation,
            respectProcedureOuverture : this.Listid.respectProcedureOuverture,
            disponibiliteMateriel : this.Listid.disponibiliteMateriel,
            nbAgentElectauraux : this.Listid.nbAgentElectauraux,
            motifRapport : this.Listid.motifRapport,
            motifRenvoi : this.Form.get('motifRenvoi')?.value,
            dateRapport : this.Form.get('dateRapport')?.value,
            renvoiePossible : this.Form.get('renvoiePossible')?.value,
            typeRapportEntity : {
              idTypeRapport: this.Listid.typeRapportEntity.idTypeRapport,
            },
            affectationagentEntity : {
              idAffectation: this.Listid.affectationagentEntity.idAffectation,
            },
            version : this.Listid.version,
            createdBy : this.Listid.createdBy,
            updatedBy : this.Listid.updatedBy,
            valider: false,
          };
        
          this.isSubmitted = true;
          console.log(this.Form, this.data, deta);
          if(this.Form.valid)
          {
            this.rapportService.update(this.data.ids, deta).subscribe(
              (res) => {
                this.formDirective.resetForm();
                // this.presentLoading();
                // this.List.unshift(data);
                this.get();
                this.close();
                // this.dismissLoading();
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
