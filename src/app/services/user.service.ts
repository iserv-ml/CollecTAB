import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";

@Injectable({
    providedIn: 'root'
})

export class UserService {
    constructor(private http: HttpClient) {}

    getUserById(id:string) {
        return this.http.get<any>(`${environment.api}user/${id}`);
    }
}