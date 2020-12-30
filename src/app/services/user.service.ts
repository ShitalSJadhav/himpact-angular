import { Injectable } from '@angular/core';
import { baseUrl } from "src/environments/environment";
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HttpClient,
  ) { }
  getUsers(): Observable<any> {
    return this.http.get<any>(`${baseUrl}users`);
  }

  getUserDetailsById(id:number): Observable<any> {
    return this.http.get<any>(`${baseUrl}users/${id}`);
  }
}
