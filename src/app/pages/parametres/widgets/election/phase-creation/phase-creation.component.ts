import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { ElectionService } from 'src/app/services/electionService';
import { PhaseElectionService } from 'src/app/services/phaseService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-phase-creation',
  templateUrl: './phase-creation.component.html',
  styleUrls: ['./phase-creation.component.scss']
})
export class PhaseCreationComponent implements OnInit {

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

  List: any = []
  List1: any = []

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private electionService: ElectionService, 
    private phaseElectionService: PhaseElectionService, 
    public router: Router,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      code: this.code,
      libelle: this.libelle,
      datePhase: this.datePhase,
      idElection: this.idElection,
      active: ['true',],
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      actif: 'false'
  });
  this.get();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  get(){
    this.electionService.get().subscribe(
      (res) => {
        this.List1 = res.data;
      }
    );
  }

  submit(values: any) {

    const data1 = {
      // idAgentTerrain: this.id,
      type : this.Form.get('type')?.value,
      libelle : this.Form.get('libelle')?.value,
      code : this.Form.get('code')?.value,
      datePhase : this.Form.get('datePhase')?.value,
      // password : this.Form.get('password').value,
      electionEntity: {
        idElection: this.Form.get('idElection')?.value
      },
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
    };

    this.isSubmitted = true;
    console.log(this.Form, this.Form.value, data1);
    if(this.Form.valid)
    {
      console.log(this.Form.value);
      this.phaseElectionService.add(data1).subscribe(
        (res) => {
          console.log(res);
          this.formDirective.resetForm();
          // this.presentLoading();
          this.List.unshift(data1);
          this.List.push(data1)
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
