import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/services/agentService';
import { AuthService } from 'src/app/services/authService';
import { CoordinateurService } from 'src/app/services/coordinateurService';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { WantToAffectComponent } from './want-to-affect/want-to-affect.component';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-agent-creation',
  templateUrl: './agent-creation.component.html',
  styleUrls: ['./agent-creation.component.scss']
})
export class AgentCreationComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  nom = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  prenom = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  adresse = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  telephone = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  email = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  password = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // coordinateurEntity = this.formBuilder.group({
  idCoordinateur =  new FormControl('', [Validators.required])
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = []
  List1: any = []

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private coordinateurService: CoordinateurService,
    private agentService: AgentService, 
    public router: Router,
    private authService: AuthService,
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      nom: this.nom,
      prenom: this.prenom,
      adresse: this.adresse,
      email: this.email,
      telephone: this.telephone,
      // coordinateurEntity: this.formBuilder.group({
        idCoordinateur: this.idCoordinateur,
      // }),
      password: this.password,
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
    this.agentService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  get1(){
    this.coordinateurService.get().subscribe(
      (res) => {
        this.List1 = res.data;
        console.log(this.List1);
      }
    );
  }

  openDialogAffect() {
    const dialogRef = this.dialog.open(WantToAffectComponent
      // { data: {ids: id}, disableClose: true }
      );
      // console.log(id);
     
    dialogRef.afterClosed().subscribe(result => {
      this.get();
      console.log(`Dialog result: ${result}`);
    });
  }

  submit(values: any) {

    const data1 = {
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
      coordinateurEntity: {
        idCoordinateur: this.Form.get('idCoordinateur')?.value
      }
    };

    const data = {
      // idAgentTerrain: this.id,
      nom : this.Form.get('nom')?.value,
      prenom : this.Form.get('prenom')?.value,
      adresse : this.Form.get('adresse')?.value,
      email : this.Form.get('email')?.value,
      phone : this.Form.get('telephone')?.value,
      password : this.Form.get('password')?.value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      gender: "",
      userrole: 'ROLE_AGENT'
    };

    this.isSubmitted = true;
    console.log(this.Form, this.Form.value, data);
    if(this.Form.valid)
    {
      console.log(this.Form.value);
      this.userService.add(data).subscribe(
        (res) => {
          console.log(res);
          this.formDirective.resetForm();
          // this.presentLoading();
          this.List.unshift(data1);
          this.List.push(data1)
          // this.get();
          this.agentService.add(data1).subscribe(
            (res) => {
              console.log(res);
              this.formDirective.resetForm();
              this.openDialogAffect();
              // this.presentLoading();
              // this.get();
              // this.router.navigate(['/utilisateurs', {List: this.List}]);
              // this.dismissLoading();
            }
          )
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
