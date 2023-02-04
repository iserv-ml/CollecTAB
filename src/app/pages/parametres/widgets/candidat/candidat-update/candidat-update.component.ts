import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CandidatService } from 'src/app/services/candidatService';
import { AllianceService } from 'src/app/services/allianceService';
import { PartiService } from 'src/app/services/partiService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-candidat-update',
  templateUrl: './candidat-update.component.html',
  styleUrls: ['./candidat-update.component.scss']
})
export class CandidatUpdateComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  nom = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  prenom = new FormControl('', [Validators.required,  Validators.minLength(3)]);
    idAlliance =  new FormControl('', [Validators.required])
    idParti =  new FormControl('', [Validators.required])
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = [];
  Listid: any;
  List1: any = [];
  List2: any = [];

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private allianceService: AllianceService,
    private candidatService: CandidatService, 
    public router: Router,
    private partiService: PartiService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<CandidatUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      nom: this.nom,
      prenom: this.prenom,
      // adresse: this.adresse,
      // email: this.email,
      // telephone: this.telephone,
      // coordinateurEntity: this.formBuilder.group({
        idAlliance: this.idAlliance,
      // }),
      idParti: this.idParti,
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      actif: 'false'
  });
  this.getById();
  this.get1();
  this.get2();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  getById(){
    this.candidatService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as String;
      }
    );
  }

  get1(){
    this.partiService.get().subscribe(
      (res) => {
        this.List1 = res.data;
        console.log(this.List1);
      }
    );
  }

  get2(){
    this.allianceService.get().subscribe(
      (res) => {
        this.List2 = res.data;
        console.log(this.List1);
      }
    );
  }

  submit(values: any) {

    const data = {
      idCandidat: this.data.ids,
      nom : this.Form.get('nom')?.value,
      prenom : this.Form.get('prenom')?.value,
      // adresse : this.Form.get('adresse')?.value,
      // email : this.Form.get('email')?.value,
      // telephone : this.Form.get('telephone')?.value,
      // notification : this.Form.get('notification').value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      allianceEntity: {
        idAlliance: this.Form.get('idAlliance')?.value
      },
      partiEntity: {
        idParti: this.Form.get('idParti')?.value
      }
    };

    this.isSubmitted = true;
    console.log(this.Form);
    if(this.Form.valid)
    {
      this.candidatService.update(this.data.ids, data).subscribe(
        (res) => {
          this.formDirective.resetForm();
          // this.presentLoading();
          // this.List.unshift(data);
          // this.get();
          this.close();
          // this.router.navigate(['/pays', {List: this.List}]);
          // this.dismissLoading();
        }
      )
    }
    
  }

  close() {
    const dialogRef = this.dialog.closeAll();
    // this.get()
  }

}
