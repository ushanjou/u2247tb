import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() {
    this.IsAuthenticate = localStorage.getItem('IsAuthenticate') ? true : false;
    this.userName = this.IsAuthenticate ? localStorage.getItem("UserName") : "";
  }

  public IsAuthenticate: boolean = false;
  Role: string = "anonymous";
  public userName: string | any = "";
  loginType: string = "Normal";

  logout(): void {
    this.IsAuthenticate = false;
    localStorage.removeItem('IsAuthenticate');
    localStorage.removeItem('Role');
    localStorage.removeItem('UserName');
  }
  login(userName: string, password: string): Observable<any> {
    this.userName = userName; this.loginType = "Normal"
    if (userName === 'admin' && password === 'admin') {
      this.IsAuthenticate = true; this.Role = "Admin";
    }
    else if (userName.length > 3 && password.length > 3) {
      this.IsAuthenticate = true; this.Role = "Users";
    } else {
      this.IsAuthenticate = false; this.Role = "anonymous";
      this.userName = "";
    }
    this.saveState();
    return of(this.IsAuthenticate).pipe(delay(1000),
      tap(val => {
        console.log(`IsAuth:${val} ; Role:${this.Role}`);
      })
    );
  }

  saveState() {
    localStorage.setItem('IsAuthenticate', this.IsAuthenticate.toString());
    localStorage.setItem('Role', this.Role);
    localStorage.setItem('UserName', this.userName ? this.userName : "");
  }
}
