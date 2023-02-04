import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class CommuneService {
  // prochesSubject = new Subject<Proche[]>();

  // procheList: Proche[] = [];

  test = new Array();
  constructor(private http: HttpClient, private router: Router) {
  }

  get() {
    return this.http.get<any>(`${environment.api}commune/`);
  }

  add(entity: any) {
    return this.http.post<any>(`${environment.api}commune`, entity);
  }

  getById(id: any){
    return this.http.get<any>(`${environment.api}commune/${id}`);

  }

  delete(id: any){
    return this.http.delete<any>(`${environment.api}commune/${id}`);

  }

  update(id: any, proche: any){
    return this.http.put<any>(`${environment.api}commune/update/${id}`, proche);
  }



}
