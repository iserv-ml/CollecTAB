import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PaysService } from 'src/app/services/paysService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-pays-update',
  templateUrl: './pays-update.component.html',
  styleUrls: ['./pays-update.component.scss']
})
export class PaysUpdateComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  nom = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  codeiso3 = new FormControl('', [Validators.required,  Validators.minLength(2)]);
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = [];
  Listid: any;
  List1: any = [];

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private paysService: PaysService, 
    public router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PaysUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      nom: this.nom,
      codeiso3: this.codeiso3,
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      actif: 'false'
  });
  this.getById();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  getById(){
    this.paysService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as String;
      }
    );
  }

  submit(values: any) {

    const data = {
      idPays: this.data.ids,
      nom : this.Form.get('nom')?.value,
      codeiso3 : this.Form.get('codeiso3')?.value,
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
      this.paysService.update(this.data.ids, data).subscribe(
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
