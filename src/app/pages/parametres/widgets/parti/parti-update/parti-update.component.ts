import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PartiService } from 'src/app/services/partiService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-parti-update',
  templateUrl: './parti-update.component.html',
  styleUrls: ['./parti-update.component.scss']
})
export class PartiUpdateComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  nom = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  code = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // adresse = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // telephone = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // email = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // password = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // // coordinateurEntity = this.formBuilder.group({
  // idCoordinateur =  new FormControl('', [Validators.required])
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = [];
  Listid: any;
  List1: any = [];

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private partiService: PartiService, 
    public router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PartiUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      nom: this.nom,
      code: this.code,
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      actif: 'false'
  });
  this.getById();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  getById(){
    this.partiService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as String;
      }
    );
  }

  submit(values: any) {

    const data = {
      idParti: this.data.ids,
      nom : this.Form.get('nom')?.value,
      code : this.Form.get('code')?.value,
      // adresse : this.Form.get('adresse')?.value,
      // email : this.Form.get('email')?.value,
      // telephone : this.Form.get('telephone')?.value,
      // notification : this.Form.get('notification').value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      // coordinateurEntity: {
      //   idCoordinateur: this.Form.get('idCoordinateur')?.value
      // }
    };

    this.isSubmitted = true;
    console.log(this.Form);
    if(this.Form.valid)
    {
      this.partiService.update(this.data.ids, data).subscribe(
        (res) => {
          this.formDirective.resetForm();
          // this.presentLoading();
          this.List.unshift(data);
          this.List.push(data);
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