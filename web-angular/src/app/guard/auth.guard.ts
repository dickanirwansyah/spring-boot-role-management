import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from '../service/auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private auth: AuthService) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    //if(localStorage.getItem('credential')) {
    // console.log("loggin:",this.auth.loggedIn());
    // console.log("ROUTE:",route);
    // console.log("state:",state);
    this.cekMenu(state.url)

    if (this.auth.loggedIn()) {
      return true;
    } else {
      this.router.navigateByUrl('/auth/login');
      return false;
    }
  }

  public cekMenu(menu: string): boolean {
    //      var navs=JSON.parse(localStorage.getItem("_MENU"));
    //      for(var i=0;i<navs.length;i++){
    //          console.log("menu "+menu,navs[i]);
    //      }
    console.log("menu :",menu);
    return true;
  }
}