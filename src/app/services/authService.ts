import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";
import { BehaviorSubject, of } from 'rxjs';
import { tap } from 'rxjs/operators';
// import { Plugins } from '@capacitor/core';

// const { Storage } = Plugins;
 
const TOKEN_KEY = 'user-token';
 
export interface User {
  name: string;
  role: string;
  permissions: string[];
}

@Injectable({
    providedIn: 'root'
})

export class AuthService {

    private currentUser: BehaviorSubject<any> = new BehaviorSubject(null);

    public user = new Subject<unknown>();

    constructor(private http: HttpClient,
        private router : Router) {
            // this.loadUser()
        }

        // loadUser() {
        //     // Normally load e.g. JWT at this point
        //     Storage.get({ key: TOKEN_KEY }).then(res => {
        //       if (res.value) {
        //         this.currentUser.next(JSON.parse(res.value));
        //       } else {
        //         this.currentUser.next(false);
        //       }
        //     });
        //   }

        getUserObservable(): Observable<unknown> {
            return this.user.asObservable();
        }

        setUserData(data: any) {
            this.user.next(data);
        }

        signIn(auth: any): Observable<any> {
            let userObj;
            userObj = {
                name: 'Tony Test',
                role: 'USER',
                permissions: ['read']
              };

              of(userObj).pipe(
                tap(user => {
                // Store the user or token
                // Storage.set({ key: TOKEN_KEY, value: JSON.stringify(user) })
                this.currentUser.next(user);
                })
            );
            return this.http.post<any>(`${environment.api}auth/signin`, auth);
        }

        signUpAgent(customer: any) {
            return  this.http.post<any>(`${environment.api}users/signUpAgent`, customer);
        }

        signUp(customer: any) {
            return  this.http.post<any>(`${environment.api}users/signUpUser`, customer);
        }

        getCurrentUser(): any {
            return JSON.parse(localStorage.getItem('user') as string);
        }

        updatePassword(password: any , id: any) {
            return this.http.put<any>(`${environment.api}users/changePassword/${id}`, password);
        }

        errorManagement(error: HttpErrorResponse) {
            // switch(error.status) {
            //     case 404:
            //         this.router.navigate(['./sign-in']);
            //         break;
            //     case 400:
            //         this.appService.presentToast('Veuillez renseigner les bonnes informations!', 'warning');
            //         break;
            //     case 401:
            //         this.appService.presentToast('information incorrect', 'warning');
            //         break;
            //     case 403:
            //         this.appService.presentToast('Vous n\'etes pas autorisé ç acceder a cette resource', 'warning');
            //         break;
            //     default:
            //         this.appService.presentToast('Server temporairement indisponible', 'warning');
    
            // }
        }

        // Remove all information of the previous user
  async logout() {
    // await Storage.remove({ key: TOKEN_KEY });
    this.currentUser.next(false);
    this.router.navigateByUrl('/', { replaceUrl: true });
  }
 
  // Check if a user has a certain permission
  hasPermission(permissions: string[]): boolean {
    for (const permission of permissions) {
      if (!this.currentUser.value || !this.currentUser.value.permissions.includes(permission)) {
        return false;
      }
    }
    return true;
  }

}