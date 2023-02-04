import { Component, EventEmitter, Inject, Input, OnInit, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormGroupDirective, UntypedFormBuilder, UntypedFormGroup, Validators, FormControl, NgForm } from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { DemandeAppelService } from 'src/app/services/demandeAppelService';
import { AuthService } from 'src/app/services/authService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-demande-appel-update',
  templateUrl: './demande-appel-update.component.html',
  styleUrls: ['./demande-appel-update.component.scss']
})
export class DemandeAppelUpdateComponent implements OnInit {

  List = [];
  Listid: any;

  isSubmitted = false;
  isLoading = false;
  Form!: UntypedFormGroup;
  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  
  matcher = new MyErrorStateMatcher();
  motif = new FormControl('', [Validators.required,  Validators.minLength(3)]);

  user: any;
  idAgent: any;

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private demandeAppelService: DemandeAppelService,
    public dialog: MatDialog,
    private auth: AuthService,
    // private loadingController: LoadingController,
    public dialogRef: MatDialogRef<DemandeAppelUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.get();
    this.Form = this.formBuilder.group({
      // suffrage: this.statistiqueService.getById(this.id).subscribe((res) => {
      //   return res.suffrage
      // }),
        motif: this.motif,
        // renvoiePossible: 'true',
        // dateRapport: Date.now(),
        // motif: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
        traite: 'true',
    });
    console.log(this.Form, this.Form.errors, this.get(), this.data.ids, this.idAgent);
  }

  get(){
    this.demandeAppelService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  submit(values: any) {

    this.demandeAppelService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as string;
        console.log(this.Listid);
        // this.data = this.List;

    const e = localStorage.getItem('user') ;
    this.user = JSON.parse(e as string);
    this.user = JSON.parse(localStorage.getItem('user') as string);
    this.auth.getUserObservable()
    .subscribe(res => this.user = res);
    this.idAgent = this.user.iduser;
    console.log(this.user, this.idAgent);
    
    // this.auth.getUserObservable().subscribe(
    //   ress => {
    //     this.user = ress,
    //     this.idAgent = this.user.iduser;
    //     console.log(this.idAgent);
    //   }
    //   );
    
    const deta = {
      idDemande: this.data.ids,
      commentaire : this.Listid.commentaire,
      // // traite : this.Listid.traite,
      // tauxParticipation : this.Listid.tauxParticipation,
      // respectProcedureOuverture : this.Listid.respectProcedureOuverture,
      // disponibiliteMateriel : this.Listid.disponibiliteMateriel,
      // nbAgentElectauraux : this.Listid.nbAgentElectauraux,
      // motifRapport : this.Listid.motifRapport,
      motif : this.Form.get('motif')?.value,
      traite : this.Form.get('traite')?.value,
      user : {
        iduser: this.Listid.user.iduser
      },
      // agentTerrainEntity : {
      //   idAgentTerrain: this.Listid.agentTerrainEntity.idAgentTerrain,
      // },
      version : this.Listid.version,
      createdBy : this.Listid.createdBy,
      createdAt : this.Listid.createdAt,
      updatedBy : this.Listid.updatedBy,
    };
  
    this.isSubmitted = true;
    console.log(this.Form, this.data, deta, this.idAgent);
    if(this.Form.valid)
    {
      console.log("envoi en cour");
      this.demandeAppelService.update(this.data.ids, deta).subscribe(
        (res) => {
          this.formDirective.resetForm();
          // this.presentLoading();
          // this.List.unshift(data);
          this.get();
          this.close();
          // this.router.navigate(['/pays', {List: this.List}]);
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
