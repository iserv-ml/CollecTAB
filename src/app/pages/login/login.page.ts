import { Component, OnInit, ViewChild, NgZone } from '@angular/core';
import {FormControl, FormGroupDirective, NgForm, Validators, FormBuilder, FormGroup} from '@angular/forms';
import {ErrorStateMatcher} from '@angular/material/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/AuthService';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    emailFormControl = new FormControl('', [
      Validators.required,
      Validators.email,
    ]);
  
    matcher = new MyErrorStateMatcher();

    @ViewChild(FormGroupDirective) formDirective: FormGroupDirective;
    loginForm: FormGroup;
    passwordType = 'password';
    passwordValid = true;
    emailValid = true;

  constructor(
    public formBuilder: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      emailOrPhone: ['', Validators.compose([Validators.required])],
      password:  ['', Validators.compose([Validators.required])]
    });
  }

  public onLoginFormSubmit(values): void {
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
            // if(res?.user.userrole === 'ROLE_MEDECIN'){
              this.router.navigate(['/home']);
            // }else{
              // this.router.navigate(['/login']);
            // }
            //this.appService.setUserData(res.user);
            //this.router.navigate(['/']);
            console.log('connecter');

          }
        }, (error: HttpErrorResponse) => {
          console.log(error);
          if (error.status === 404) {
            this.emailValid = false;
          }
          else if (error.status === 401) {
            this.passwordValid = false;
            this.loginForm.controls['emailOrphone'].setErrors({'incorrect': true });

          }
        });
    }
  }

}
