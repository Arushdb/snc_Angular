import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router  } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private router: Router) { }
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.isLoggedIn()) {
    return true;
    }
    // navigate to login page as user is not authenticated
    this.router.navigate(['/login']);
    return false;
}
public isLoggedIn(): boolean {
 let status = false;
 if (localStorage.getItem('isLoggedIn') == 'true') {
    console.log('inside isloggedin in authguard');
    status = true;
 }
 else {
    status = false;
    console.log('Arush logout status'+ status);
    }
 return status;
 }

}
