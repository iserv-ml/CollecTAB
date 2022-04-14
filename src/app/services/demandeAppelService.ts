import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class DemandeAppelService {
  // prochesSubject = new Subject<Proche[]>();

  // procheList: Proche[] = [];

  test = new Array();
  constructor(private http: HttpClient, private router: Router) {
  }

  get() {
    return this.http.get<any>(`${environment.api}demandeAppel/`);
  }

  add(entity: any) {
    return this.http.post<any>(`${environment.api}demandeAppel`, entity);
  }

  getById(id){
    return this.http.get<any>(`${environment.api}demandeAppel/${id}`);

  }

  delete(id){
    return this.http.delete<any>(`${environment.api}demandeAppel/delete/${id}`);

  }

  update(id, proche){
    return this.http.put<any>(`${environment.api}demandeAppel/update/${id}`, proche);
  }



}
