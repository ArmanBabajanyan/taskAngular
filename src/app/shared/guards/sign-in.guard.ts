import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,Router, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignInGuard implements CanActivate {
  token: String;
  success: String;

  constructor(private router: Router){
    this.token = localStorage.getItem('token');
    this.success = localStorage.getItem('success');
  }

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
      if(this.token && this.success == 'true') {
        return true;
      } else {
        this.router.navigate(['sign-in'])
      }
  }
}
