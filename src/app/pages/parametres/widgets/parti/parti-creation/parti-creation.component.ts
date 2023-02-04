import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, FormGroupDirective, Validators, FormControl, NgForm } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService';
import { UserService } from 'src/app/services/user.service';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { PartiService } from 'src/app/services/partiService';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-parti-creation',
  templateUrl: './parti-creation.component.html',
  styleUrls: ['./parti-creation.component.scss']
})
export class PartiCreationComponent implements OnInit {

  @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
  Form!: UntypedFormGroup;
  
  matcher = new MyErrorStateMatcher();
  nom = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  code = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // adresse = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // telephone = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // email = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // password = new FormControl('', [Validators.required,  Validators.minLength(3)]);
  // coordinateurEntity = this.formBuilder.group({
  // idCoordinateur =  new FormControl('', [Validators.required])
  // });

  isSubmitted = false;
  isLoading = false;

  List: any = []
  List1: any = []

  constructor(
    public formBuilder: UntypedFormBuilder, 
    private partiService: PartiService, 
    public router: Router,
    private authService: AuthService,
    private userService: UserService,
    public dialog: MatDialog,
  ) { }

  ngOnInit() {
    this.Form = this.formBuilder.group({
      nom: this.nom,
      code: this.code,
      // adresse: this.adresse,
      // email: this.email,
      // telephone: this.telephone,
      // coordinateurEntity: this.formBuilder.group({
        // idCoordinateur: this.idCoordinateur,
      // }),
      // password: this.password,
      version: 1,
      updatedBy: 'admin',
      createdBy: 'admin',
      actif: 'false'
  });
  this.get();
  console.log(this.Form, this.Form.errors, this.List1);
  }

  get(){
    this.partiService.get().subscribe(
      (res) => {
        this.List = res.data;
      }
    );
  }

  submit(values: any) {

    const data = {
      // idAgentTerrain: this.id,
      nom : this.Form.get('nom')?.value,
      code : this.Form.get('code')?.value,
    };

    this.isSubmitted = true;
    console.log(this.Form, this.Form.value, data);
    if(this.Form.valid)
    {
      console.log(this.Form.value);
      this.partiService.add(data).subscribe(
        (res) => {
          console.log(res);
          this.formDirective.resetForm();
          // this.presentLoading();
          this.List.unshift(data);
          this.List.push(data)
          // this.get();
          this.userService.addAgent(data).subscribe(
            (res) => {
              console.log(res);
              this.formDirective.resetForm();
              // this.presentLoading();
              // this.get();
              // this.router.navigate(['/utilisateurs', {List: this.List}]);
              // this.dismissLoading();
            }
          )
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
