import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AgentService } from 'src/app/services/agentService';
import { AuthService } from 'src/app/services/authService';
import { CoordinateurService } from 'src/app/services/coordinateurService';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-agent-update',
  templateUrl: './agent-update.component.html',
  styleUrls: ['./agent-update.component.scss']
})
export class AgentUpdateComponent implements OnInit {

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

  List: any = [];
  Listid: any;
  List1: any = [];
  user: any = [] ;

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private coordinateurService: CoordinateurService,
    private agentService: AgentService, 
    public router: Router,
    private authService: AuthService,
    private userService: UserService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AgentUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
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
  this.getById();
  this.get1();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  getById(){
    this.agentService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as String;
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

  submit(values: any) {

    const data = {
      idAgentTerrain: this.data.ids,
      nom : this.Form.get('nom')!.value,
      prenom : this.Form.get('prenom')!.value,
      adresse : this.Form.get('adresse')!.value,
      email : this.Form.get('email')!.value,
      telephone : this.Form.get('telephone')!.value,
      // notification : this.Form.get('notification').value,
      version : this.Form.get('version')!.value,
      createdBy : this.Form.get('createdBy')!.value,
      updatedBy : this.Form.get('updatedBy')!.value,
      coordinateurEntity: {
        idCoordinateur: this.Form.get('idCoordinateur')!.value
      }
    };


    this.isSubmitted = true;
    const val = this.Form.get('telephone')!.value;
    const val1 = this.Form.get('nom')!.value;
    const val2 = this.Form.get('prenom')!.value;
    const val3 = this.Form.get('adresse')!.value;
    const val4 = this.Form.get('email')!.value;
    const val5 = this.Form.get('telephone')!.value;
    const val6 = this.Form.get('password')!.value;
    const val7 = this.Form.get('version')!.value;
    const val8 = this.Form.get('createdBy')!.value;
    const val9 = this.Form.get('updatedBy')!.value;
    console.log(this.Form, this.Form.get('telephone')!.value, val);
    if(this.Form.valid)
    {
      this.agentService.update(this.data.ids, data).subscribe(
        (res) => {
          this.formDirective.resetForm();
          // this.presentLoading();
          this.List.unshift(data);
          this.List.push(data);
          // this.get();
          this.userService.get().subscribe(
            (res) => {
              this.user = res.data;
              console.log(this.user);
              for(let i=0; i<this.user.length; i++)
              {
                let users = this.user[i];
                let userPhones = users.phone;
                let userPhone = val;
                console.log(userPhones, userPhone);
                if(userPhones == userPhone )
                {
                  const data1 = {
                    iduser: users.iduser,
                    nom : val1,
                    prenom : val2,
                    adresse : val3,
                    email : val4,
                    phone : val5,
                    password : val6,
                    version : val7,
                    createdBy : val8,
                    updatedBy : val9,
                      userrole: "ROLE_AGENT",
                    //gender: ""
                    // userrole: 'ROLE_AGENT'
                  };
                  console.log(data1);
                  this.userService.update(users.iduser, data1).subscribe(
                    (res) => {
                      console.log(res);
                      this.formDirective.resetForm();
                      // this.presentLoading();
                      // this.get();
                      // this.router.navigate(['/utilisateurs', {List: this.List}]);
                      // this.dismissLoading();
                    }
                  )
                }
              }
            }
          )
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
