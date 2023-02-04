import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PartiService } from 'src/app/services/partiService';
import { AllianceService } from 'src/app/services/allianceService';
import { CandidatService } from 'src/app/services/candidatService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-candidat-creation',
  templateUrl: './candidat-creation.component.html',
  styleUrls: ['./candidat-creation.component.scss']
})
export class CandidatCreationComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  nom = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  prenom = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // adresse = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // telephone = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // email = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // password = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // coordinateurEntity = this.formBuilder.group({
    idParti =  new FormControl('', [Validators.required])
    idAlliance =  new FormControl('', [Validators.required])
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = []
  List1: any = []
  List2: any = []

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private partiService: PartiService,
    private allianceService: AllianceService,
    private candidatService: CandidatService, 
    public router: Router,
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      nom: this.nom,
      prenom: this.prenom,
      // adresse: this.adresse,
      // email: this.email,
      // telephone: this.telephone,
      // coordinateurEntity: this.formBuilder.group({
        idParti: this.idParti,
      // }),
      idAlliance: this.idAlliance,
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      actif: 'false'
  });
  this.get();
  this.get1();
  this.get2();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  get(){
    this.candidatService.get().subscribe(
      (res) => {
        this.List = res.data;
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

  get1(){
    this.partiService.get().subscribe(
      (res) => {
        this.List1 = res.data;
        console.log(this.List1);
      }
    );
  }

  submit(values: any) {

    const data = {
      // idAgentTerrain: this.id,
      nom : this.Form.get('nom')?.value,
      prenom : this.Form.get('prenom')?.value,
      adresse : this.Form.get('adresse')?.value,
      email : this.Form.get('email')?.value,
      telephone : this.Form.get('telephone')?.value,
      // password : this.Form.get('password').value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      partiEntity: {
        idParti: this.Form.get('idParti')?.value
      },
      allianceEntity: {
        idAlliance: this.Form.get('idAlliance')?.value
      }
    };

    this.isSubmitted = true;
    console.log(this.Form, this.Form.value, data);
    if(this.Form.valid)
    {
      console.log(this.Form.value);
      this.candidatService.add(data).subscribe(
        (res) => {
          console.log(res);
          this.formDirective.resetForm();
          // this.presentLoading();
          this.List.unshift(data);
          // this.List.push(data1)
          // this.get();
          // this.dismissLoading();
          // this.router.navigate(['/agent', {List: this.List}]);
          this.close();
        }
      );
    }
    else
      {
      //   error => {
      //     console.log(error);
      // }
  }
  }

  close() {
    const dialogRef = this.dialog.closeAll();
    this.get()
  }

}
