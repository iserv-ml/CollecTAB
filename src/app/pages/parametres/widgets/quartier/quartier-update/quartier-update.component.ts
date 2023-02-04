import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommuneService } from 'src/app/services/communeService';
import { QuartierService } from 'src/app/services/quartierService';
import { RegionService } from 'src/app/services/regionService';
import { CercleService } from 'src/app/services/cercleService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-quartier-update',
  templateUrl: './quartier-update.component.html',
  styleUrls: ['./quartier-update.component.scss']
})
export class QuartierUpdateComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;
  thirdFormGroup!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  code = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  libelle = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // coordinateurEntity = this.formBuilder.group({
    idCommune =  new FormControl('', [Validators.required])
    idRegion =  new FormControl('', [Validators.required]);
    idCercle = new FormControl('', [Validators.required]);
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = [];
  Listid: any;
  List1: any = [];
  Region!: any [];
  Cercle!: any [];
  nom = 'yyyuyy';

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private communeService: CommuneService,
    private quartierService: QuartierService, 
    private cercleService: CercleService,
    private regionService: RegionService,
    public router: Router,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<QuartierUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.firstFormGroup = this.formBuilder.group({
      idRegion: ['', Validators.required],
    });
    this.secondFormGroup = this.formBuilder.group({
      idCercle: ['', Validators.required],
    });
    this.thirdFormGroup = this.formBuilder.group({
      idCommune: ['', Validators.required],
    });
    this.Form = this.formBuilder.group({
      code: this.code,
      libelle: this.libelle,
      // coordinateurEntity: this.formBuilder.group({
        idCommune: this.thirdFormGroup.get('idCommune')?.value,
      // }),
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      actif: 'false'
  });
  this.getById();
  this.get1();
  this.getR();
  this.getCer();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  getById(){
    this.quartierService.getById(this.data.ids).subscribe(
      (res) => {
        this.Listid = res as String;
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

  getR(){
    this.regionService.get().subscribe(
      (res) => {
        this.Region = res.data;
        console.log(this.Region);
      }
    );
  }

  getCer(){
    this.cercleService.get().subscribe(
      (res) => {
        this.Cercle = res.data;
        console.log(this.Cercle);
      }
    );
  }

  onSubmitFirst() {
    this.idRegion = this.firstFormGroup.get('idRegion')?.value;
    return this.idRegion;
  }

  onSubmitSecond() {
    this.idCercle = this.secondFormGroup.get('idCercle')?.value;
    return this.idCercle;
  }
  onSubmitthird() {
    this.idCommune = this.thirdFormGroup.get('idCommune')?.value;
    return this.idCommune;
  } 

  submit(values: any) {

    const data = {
      idQuartier: this.data.ids,
      code : this.Form.get('code')?.value,
      libelle : this.Form.get('libelle')?.value,
      // notification : this.Form.get('notification').value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      communeEntity: {
        idCommune: this.thirdFormGroup.get('idCommune')?.value
      }
    };

    this.isSubmitted = true;
    console.log(this.Form);
    if(this.Form.valid)
    {
      this.quartierService.update(this.data.ids, data).subscribe(
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
