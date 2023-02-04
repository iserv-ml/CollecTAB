import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PaysService } from 'src/app/services/paysService';
import { RegionService } from 'src/app/services/regionService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-region-update',
  templateUrl: './region-update.component.html',
  styleUrls: ['./region-update.component.scss']
})
export class RegionUpdateComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  code = new FormControl('', [Validators.required,  Validators.minLength(2)]);
  libelle = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // coordinateurEntity = this.formBuilder.group({
    idPays =  new FormControl('', [Validators.required])
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = [];
  Listid: any;
  List1: any = [];

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private paysService: PaysService,
    private regionService: RegionService, 
    public router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<RegionUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      code: this.code,
      libelle: this.libelle,
      // coordinateurEntity: this.formBuilder.group({
        idPays: this.idPays,
      // }),
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
    this.regionService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as String;
      }
    );
  }

  get1(){
    this.paysService.get().subscribe(
      (res) => {
        this.List1 = res.data;
        console.log(this.List1);
      }
    );
  }

  submit(values: any) {

    const data = {
      idRegion: this.data.ids,
      code : this.Form.get('code')?.value,
      libelle : this.Form.get('libelle')?.value,
      // notification : this.Form.get('notification').value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      paysEntity: {
        idPays: this.Form.get('idPays')?.value
      }
    };

    this.isSubmitted = true;
    console.log(this.Form);
    if(this.Form.valid)
    {
      this.regionService.update(this.data.ids, data).subscribe(
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
