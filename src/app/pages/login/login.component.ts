import { FormGroup, FormBuilder} from '@angular/forms';
import { Component, OnInit, ViewChild, NgZone,  AfterContentInit, AfterViewInit, OnDestroy } from '@angular/core';
import {UntypedFormControl, FormGroupDirective, NgForm, Validators, UntypedFormBuilder, UntypedFormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/authService';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: UntypedFormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  emailFormControl = new UntypedFormControl('', [
    Validators.required,
    Validators.email,
  ]);

  matcher = new MyErrorStateMatcher();

    @ViewChild(FormGroupDirective) formDirective!: FormGroupDirective;
    loginForm!: UntypedFormGroup;
    passwordType = 'password';
    passwordValid = true;
    emailValid = true;
    // error: HttpErrorResponse;
    error1!: string;
      error = '';

  public form!:FormGroup;
  // public settings: Settings;
  constructor(
    // public appSettings:AppSettings,
    public formBuilder: UntypedFormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private authService: AuthService,
    ){

      this.loginForm = this.formBuilder.group({
        emailOrPhone: ['', Validators.compose([Validators.required])],
        password:  ['', Validators.compose([Validators.required])]
      });

    // this.settings = this.appSettings.settings; 
    // this.form = this.fb.group({
    //   'email': [null, Validators.compose([Validators.required])],
    //   'password': [null, Validators.compose([Validators.required, Validators.minLength(6)])] 
    // });
  }

  public onLoginFormSubmit(values: any): void {
    this.passwordValid = true;
    this.emailValid = true;
    if (this.loginForm.valid) {
      // this.router.navigate(['/']);
      this.authService.signIn(values)
        .subscribe(res => {
          console.log(res);
          if (!res.accessToken) {
            //this.snackBar.open(res.message, res.message, {panelClass: 'warning', verticalPosition: 'top', duration: 3000});
            return;
          } else {
            localStorage.setItem('user', JSON.stringify(res.user));
            localStorage.setItem('token', JSON.stringify(res.accessToken));
            this.authService.setUserData(res.user);
            console.log(res?.user.userrole);
            if(res?.user.userrole === 'SUPERVISEUR_CENI' || res?.user.userrole === 'ROLE_COORDINATEUR'){
              this.router.navigate(['/home']);
            }else{
              this.router.navigate(['/login']);
            }
            this.error1 = "vous n'avez pas d'autorisation!";
            // this.appService.setUserData(res.user);
            // this.router.navigate(['/']);
            console.log('connecter');

          }
        }, (error: HttpErrorResponse) => {
          console.log(error);
          if (error.status === 404) {
            this.emailValid = false;
            this.error = "email introuvable";
          }
          else if (error.status === 401) {
            this.passwordValid = false;
            // this.loginForm.controls['emailOrphone'].setErrors({'incorrect': true });
            this.error = "mot de passe incorrecte";

          }
        });
    }
  }

  // public onSubmit(values:Object):void {
  //   if (this.form.valid) {
  //     this.router.navigate(['/']);
  //   }
  // }

  ngAfterViewInit(){
    // this.settings.loadingSpinner = false; 
  }

  ngOnInit(): void {
  }

}
