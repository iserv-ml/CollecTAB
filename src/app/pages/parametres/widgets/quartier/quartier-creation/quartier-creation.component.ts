import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommuneService } from 'src/app/services/communeService';
import { QuartierService } from 'src/app/services/quartierService';
import { CercleService } from 'src/app/services/cercleService';
import { RegionService } from 'src/app/services/regionService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-quartier-creation',
  templateUrl: './quartier-creation.component.html',
  styleUrls: ['./quartier-creation.component.scss']
})
export class QuartierCreationComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  firstFormGroup!: UntypedFormGroup;
  secondFormGroup!: UntypedFormGroup;
  thirdFormGroup!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  code = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  libelle = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // coordinateurEntity = this.formBuilder.group({
    idCommune =  new FormControl('', [Validators.required]);
    idRegion =  new FormControl('', [Validators.required]);
    idCercle = new FormControl('', [Validators.required]);
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = []
  List1: any = [];
  Region!: any [];
  Cercle!: any [];

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private communeService: CommuneService,
    private quartierService: QuartierService,
    private cercleService: CercleService,
    private regionService: RegionService,
    public router: Router,
    public dialog: MatDialog,
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
  this.get();
  this.get1();
  this.getR();
  this.getCer();
  console.log(this.Form, this.Form.errors, this.List1,this.firstFormGroup, this.idRegion);
  }

  get(){
    this.quartierService.get().subscribe(
      (res) => {
        this.List = res.data;
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
      // idAgentTerrain: this.id,
      code : this.Form.get('code')?.value,
      libelle : this.Form.get('libelle')?.value,
      // password : this.Form.get('password').value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      communeEntity: {
        idCommune: this.thirdFormGroup.get('idCommune')?.value
      }
    };

    this.isSubmitted = true;
    console.log(this.Form, this.Form.value, data);
    if(this.Form.valid)
    {
      console.log(this.Form.value);
      this.quartierService.add(data).subscribe(
        (res) => {
          console.log(res);
          this.formDirective.resetForm();
          // this.presentLoading();
          this.List.unshift(data);
          this.List.push(data)
          this.get();
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
