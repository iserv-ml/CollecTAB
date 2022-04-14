import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { Observable, Subject } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class AuthService {
    public user = new Subject<unknown>();

    constructor(private http: HttpClient,
        private router : Router) {}

        getUserObservable(): Observable<unknown> {
            return this.user.asObservable();
        }

        setUserData(data) {
            this.user.next(data);
        }

        signIn(auth: any): Observable<any> {
            return this.http.post<any>(`${environment.api}auth/signin`, auth);
        }

        signUp(customer: any) {
            return  this.http.post<any>(`${environment.api}users/signin`, customer);
        }

        getCurrentUser(): any {
            return JSON.parse(localStorage.getItem('user'));
        }

        updatePassword(password , id) {
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

}