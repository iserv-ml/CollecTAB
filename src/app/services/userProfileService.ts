import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

@Injectable({
    providedIn: 'root'
})

export class UserProfileService {
    constructor(private http: HttpClient,
        private router: Router) {}

        updateProfil(profile: any): Observable<any> {
            return this.http.put<any>(`${environment.api}users/updateUser`, profile);
        }

        updateEmail(profile: any, id: any): Observable<any> {
            return this.http.put<any>(`${environment.api}users/updateEmail/${id}`, profile);
        }

        updatePhone(profile: any, id: any): Observable<any> {
            return this.http.put<any>(`${environment.api}users/updatePhone/${id}`, profile);
        }

        passwordForget(profile: any): Observable<any> {
            return this.http.put<any>(`${environment.api}users/forgetPassword`, profile);
        }
}
