import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { map } from "rxjs/operators";

import { JwtHelperService } from "@auth0/angular-jwt";



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.apiUrl
  helper = new JwtHelperService();  
  decodedToken: any;
  currentUser: any;
  constructor(private http: HttpClient) {

  }

  authenticate(model: any) {
    return this.http.post(this.apiUrl + "/authenticate", model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem("token", user.token);
          localStorage.setItem("user", JSON.stringify(user.userDetails));
          this.decodedToken = this.helper.decodeToken(user.token);
          this.currentUser = user.userDetails.email;
        }
      })
    );
  }

  register(model: any) {
    return this.http.post(this.apiUrl + "/register", model).pipe(
      map((response: any) => {
        const user = response;
      })
    );
  }

  loggedIn() {
    const token: any  = localStorage.getItem("token");
    return !this.helper.isTokenExpired(token);
  }
}
