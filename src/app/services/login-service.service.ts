import { Injectable } from '@angular/core';
import { User } from '../model/user';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})



export class LoginServiceService {

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': 'my-auth-token',
      'Access-Control-Allow-Origin': '*'

    })
  };

  constructor(private clienteHttp: HttpClient) { 

  }

  loggin(usuario: User): Observable<User>{
    const url : string = 'http://localhost:8080/logging';
    return this.clienteHttp.post<User>(url,JSON.stringify(usuario),this.httpOptions);
  }

  signUp(usuario: User): Observable<User>{
    console.log('signUp');
    const url : string = 'http://localhost:8080/loggup';
    return this.clienteHttp.post<User>(url,JSON.stringify(usuario),this.httpOptions);
  }
}
