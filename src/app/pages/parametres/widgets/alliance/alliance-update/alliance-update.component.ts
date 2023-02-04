import { Component, Inject, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { CommuneService } from 'src/app/services/communeService';
import { AllianceService } from 'src/app/services/allianceService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-alliance-update',
  templateUrl: './alliance-update.component.html',
  styleUrls: ['./alliance-update.component.scss']
})
export class AllianceUpdateComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  code = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  libelle = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // adresse = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // telephone = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // email = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // password = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // coordinateurEntity = this.formBuilder.group({
    idCommune =  new FormControl('', [Validators.required])
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = [];
  Listid: any;
  List1: any = [];

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private communeService: CommuneService,
    private allianceService: AllianceService, 
    public router: Router,
    private authService: AuthService,
    private userService: UserService,
    public dialog: MatDialog,
    public dialogRef: MatDialogRef<AllianceUpdateComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      code: this.code,
      libelle: this.libelle,
      // adresse: this.adresse,
      // email: this.email,
      // telephone: this.telephone,
      // coordinateurEntity: this.formBuilder.group({
        idCommune: this.idCommune,
      // }),
      // password: this.password,
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
    this.allianceService.getById(this.data.ids).subscribe(
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

  submit(values: any) {

    const data = {
      idAlliance: this.data.ids,
      code : this.Form.get('code')?.value,
      libelle : this.Form.get('libelle')?.value,
      // adresse : this.Form.get('adresse')?.value,
      // email : this.Form.get('email')?.value,
      // telephone : this.Form.get('telephone')?.value,
      // notification : this.Form.get('notification').value,
      version : this.Form.get('version')?.value,
      createdBy : this.Form.get('createdBy')?.value,
      updatedBy : this.Form.get('updatedBy')?.value,
      communeEntity: {
        idCommune: this.Form.get('idCommune')?.value
      }
    };

    this.isSubmitted = true;
    console.log(this.Form);
    if(this.Form.valid)
    {
      this.allianceService.update(this.data.ids, data).subscribe(
        (res) => {
          this.formDirective.resetForm();
          // this.presentLoading();
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
