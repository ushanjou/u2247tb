import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanLoad, Route, Router, RouterStateSnapshot, UrlSegment, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate, CanLoad {
  constructor(private router: Router) { }
  CheckLogin(url: string): boolean | UrlTree {
    let result: boolean|null =Boolean( localStorage.getItem('IsAuthenticate') ) ;
    let role: string|null = localStorage.getItem('Role');
    console.log(`url: ${url}, IsAuth? ${result}, role:${role}`)
    if (result) {
      switch (url) {
        case "adminpage":
          result = (role === "Admin");
          break;
        case "membercenter":
          result = (role === "Users" ||
            role === "Admin");
          break;
      }
    }
    console.log(`result:${result}`);
    if (!result)
      return this.router.parseUrl('/login?rUrl=' + url);

    if (url == "/login")
      return this.router.parseUrl('');

    return result
  }


  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
      console.log("canActivate")
    var url = decodeURI(state.url);
    var idx = url.indexOf('/');
    url = url.substring(idx + 1);
    return this.CheckLogin(url);

  }
  canLoad(
    route: Route,
    segments: UrlSegment[]): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    return true;
  }
}
