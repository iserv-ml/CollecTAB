import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PhaseElectionService } from 'src/app/services/phaseService';
import { ElectionService } from 'src/app/services/electionService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-phase-update',
  templateUrl: './phase-update.component.html',
  styleUrls: ['./phase-update.component.scss']
})
export class PhaseUpdateComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  code = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  libelle = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  datePhase = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  idElection = new FormControl('', [Validators.required]);
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = [];
  Listid: any;
  List1: any = [];

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private electionService: ElectionService, 
    private phaseElectionService: PhaseElectionService, 
    public router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<PhaseUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      code: this.code,
      libelle: this.libelle,
      datePhase: this.datePhase,
      idElection: this.idElection,
      // }),
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      active: [true]
  });
  this.getById();
  this.get();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  getById(){
    this.phaseElectionService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as String;
      }
    );
  }

  get(){
    this.electionService.get().subscribe(
      (res) => {
        this.List1 = res.data;
      }
    );
  }

  submit(values: any) {

    const data = {
      idPhase: this.data.ids,
      code : this.Form.get('code')?.value,
      libelle : this.Form.get('libelle')?.value,
      datePhase : this.Form.get('datePhase')?.value,
      active : this.Form.get('active')?.value,
      // notification : this.Form.get('notification').value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      electionEntity: {
        idElection: this.Form.get('idElection')?.value
      }
    };

    this.isSubmitted = true;
    console.log(this.Form);
    if(this.Form.valid)
    {
      this.phaseElectionService.update(this.data.ids, data).subscribe(
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
