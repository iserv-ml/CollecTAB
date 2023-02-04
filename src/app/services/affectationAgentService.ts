import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';
import {  throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AffectationAgentService {
  // prochesSubject = new Subject<Proche[]>();

  // procheList: Proche[] = [];

  private api!: 'http://192.168.15.113:8089/api/'
  // api: 'http://localhost:8089/api/',

  test = new Array();
  constructor(private http: HttpClient, private router: Router) {
  }

  handleError(error: HttpErrorResponse) {
    let errorMessage = 'Unknown error!';
    if (error.error instanceof ErrorEvent) {
      // Client-side errors
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // Server-side errors
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
  }

  public sendGetRequest(){
    return this.http.get(this.api).pipe(catchError(this.handleError));
  }

  get() {
    return this.http.get<any>(`${environment.api}AffectationAgent/`);
  }

  add(entity: any) {
    return this.http.post<any>(`${environment.api}AffectationAgent/`, entity);
  }

  getById(id: any){
    return this.http.get<any>(`${environment.api}AffectationAgent/${id}`);

  }

  delete(id: any){
    return this.http.delete<any>(`${environment.api}AffectationAgent/${id}`);

  }

  update(id: any, proche: any){
    return this.http.put<any>(`${environment.api}AffectationAgent/update/${id}`, proche);
  }



}
