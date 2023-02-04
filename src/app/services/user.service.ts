import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { Router } from '@angular/router';

@Injectable({
    providedIn: 'root'
})

export class UserService {
    // constructor(private http: HttpClient) {}

    test = new Array();
  constructor(private http: HttpClient, private router: Router) {
  }

  get() {
    return this.http.get<any>(`${environment.api}users/`);
  }

  add(entity: any) {
    return this.http.post<any>(`${environment.api}users`, entity);
  }

  addAgent(entity: any) {
    return this.http.post<any>(`${environment.api}users/signUpAgent`, entity);
  }

  addCoordo(entity: any) {
    return this.http.post<any>(`${environment.api}users/signUpCoordinateur`, entity);
  }

  getById(id: any){
    return this.http.get<any>(`${environment.api}users/${id}`);

  }

  delete(id: any){
    return this.http.delete<any>(`${environment.api}users/delete/${id}`);

  }

  update(id: any, user: any){
    return this.http.put<any>(`${environment.api}users/updateUsers/${id}`, user);
  }
}