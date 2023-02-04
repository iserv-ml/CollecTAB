import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ElectionService } from 'src/app/services/electionService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-election-update',
  templateUrl: './election-update.component.html',
  styleUrls: ['./election-update.component.scss']
})
export class ElectionUpdateComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  type = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  nbElecteurs = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  dateElection = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  suffrage = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = [];
  Listid: any;
  List1: any = [];

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private electionService: ElectionService, 
    public router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<ElectionUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      type: this.type,
      nbElecteurs: this.nbElecteurs,
      dateElection: this.dateElection,
      suffrage: this.suffrage,
      // }),
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      actif: 'false'
  });
  this.getById();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  getById(){
    this.electionService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as String;
      }
    );
  }

  submit(values: any) {

    const data = {
      idElection: this.data.ids,
      type : this.Form.get('type')?.value,
      nbElecteurs : this.Form.get('nbElecteurs')?.value,
      dateElection : this.Form.get('dateElection')?.value,
      suffrage : this.Form.get('suffrage')?.value,
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
      this.electionService.update(this.data.ids, data).subscribe(
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
