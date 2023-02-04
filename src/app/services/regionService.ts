import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, Subject } from 'rxjs';
import { environment } from '../../environments/environment';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class RegionService {
  // prochesSubject = new Subject<Proche[]>();

  // procheList: Proche[] = [];

  test = new Array();
  constructor(private http: HttpClient, private router: Router) {
  }

  get() {
    return this.http.get<any>(`${environment.api}region/`);
  }

  add(entity: any) {
    return this.http.post<any>(`${environment.api}region`, entity);
  }

  getById(id: any){
    return this.http.get<any>(`${environment.api}region/${id}`);

  }

  delete(id: any){
    return this.http.delete<any>(`${environment.api}region/delete/${id}`);

  }

  update(id: any, proche: any){
    return this.http.put<any>(`${environment.api}region/update/${id}`, proche);
  }



}
