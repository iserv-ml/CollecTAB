import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class IncidentService {
  // prochesSubject = new Subject<Proche[]>();

  // procheList: Proche[] = [];

  test = new Array();
  constructor(private http: HttpClient, private router: Router) {
  }

  get() {
    return this.http.get<any>(`${environment.api}incident/`);
  }

  add(entity: any) {
    return this.http.post<any>(`${environment.api}incident`, entity);
  }

  getById(id){
    return this.http.get<any>(`${environment.api}incident/${id}`);

  }

  delete(id){
    return this.http.delete<any>(`${environment.api}incident/delete/${id}`);

  }

  update(id, proche){
    return this.http.put<any>(`${environment.api}incident/update/${id}`, proche);
  }



}
