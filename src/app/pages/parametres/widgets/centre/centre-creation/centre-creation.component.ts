import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { QuartierService } from 'src/app/services/quartierService';
import { CentreService } from 'src/app/services/centreService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-centre-creation',
  templateUrl: './centre-creation.component.html',
  styleUrls: ['./centre-creation.component.scss']
})
export class CentreCreationComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  // nom = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  code = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // adresse = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // telephone = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // email = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // password = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // coordinateurEntity = this.formBuilder.group({
    idQuartier =  new FormControl('', [Validators.required])
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = []
  List1: any = []

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private quartierService: QuartierService,
    private centreService: CentreService, 
    public router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      // nom: this.nom,
      code: this.code,
      // adresse: this.adresse,
      // email: this.email,
      // telephone: this.telephone,
      // coordinateurEntity: this.formBuilder.group({
        idQuartier: this.idQuartier,
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
    this.centreService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  get1(){
    this.quartierService.get().subscribe(
      (res) => {
        this.List1 = res.data;
        console.log(this.List1);
      }
    );
  }

  submit(values: any) {

    const data1 = {
      // idAgentTerrain: this.id,
      // nom : this.Form.get('nom')?.value,
      code : this.Form.get('code')?.value,
      // adresse : this.Form.get('adresse')?.value,
      // email : this.Form.get('email')?.value,
      // telephone : this.Form.get('telephone')?.value,
      // password : this.Form.get('password').value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      quartierEntity: {
        idQuartier: this.Form.get('idQuartier')?.value
      }
    };

    this.isSubmitted = true;
    console.log(this.Form, this.Form.value, data1);
    if(this.Form.valid)
    {
      console.log(this.Form.value);
      this.centreService.add(data1).subscribe(
        (res) => {
          console.log(res);
          this.formDirective.resetForm();
          // this.presentLoading();
          this.List.unshift(data1);
          this.List.push(data1)
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
