import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { AllianceService } from 'src/app/services/allianceService';
import { CommuneService } from 'src/app/services/communeService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-alliance-creation',
  templateUrl: './alliance-creation.component.html',
  styleUrls: ['./alliance-creation.component.scss']
})
export class AllianceCreationComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  code = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  libelle = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // adresse = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // telephone = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // email = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // password = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // coordinateurEntity = this.formBuilder.group({
    idCommune =  new FormControl('', [Validators.required])
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = []
  List1: any = []

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private communeService: CommuneService,
    private allianceService: AllianceService, 
    public router: Router,
    private authService: AuthService,
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      code: this.code,
      libelle: this.libelle,
      // adresse: this.adresse,
      // email: this.email,
      // telephone: this.telephone,
      // coordinateurEntity: this.formBuilder.group({
        idCommune: this.idCommune,
      // }),
      // password: this.password,
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      actif: 'false'
  });
  this.get();
  this.get1();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  get(){
    this.allianceService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  get1(){
    this.communeService.get().subscribe(
      (res) => {
        this.List1 = res.data;
        console.log(this.List1);
      }
    );
  }

  submit(values: any) {

    const data1 = {
      // idAgentTerrain: this.id,
      code : this.Form.get('code')?.value,
      libelle : this.Form.get('libelle')?.value,
      // adresse : this.Form.get('adresse')?.value,
      // email : this.Form.get('email')?.value,
      // telephone : this.Form.get('telephone')?.value,
      // password : this.Form.get('password').value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      communeEntity: {
        idCommune: this.Form.get('idCommune')?.value
      }
    };

    // const data = {
    //   // idAgentTerrain: this.id,
    //   nom : this.Form.get('nom')?.value,
    //   prenom : this.Form.get('prenom')?.value,
    //   adresse : this.Form.get('adresse')?.value,
    //   email : this.Form.get('email')?.value,
    //   phone : this.Form.get('telephone')?.value,
    //   password : this.Form.get('password')?.value,
    //   version : this.Form.get('version')?.value,
    //   createdBy : this.Form.get('createdBy')?.value,
    //   updatedBy : this.Form.get('updatedBy')?.value,
    //   gender: ""
    //   // userrole: 'ROLE_AGENT'
    // };

    this.isSubmitted = true;
    console.log(this.Form, this.Form.value, data1);
    if(this.Form.valid)
    {
      console.log(this.Form.value);
      this.allianceService.add(data1).subscribe(
        (res) => {
          console.log(res);
          this.formDirective.resetForm();
          // this.presentLoading();
          // this.List.unshift(data1);
          this.List.push(data1)
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
