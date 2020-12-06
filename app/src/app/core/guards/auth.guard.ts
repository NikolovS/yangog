import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { IUser } from 'src/app/shared/interfaces';

import { UserService } from 'src/app/user/user.service';


@Injectable()
export class AuthGuard implements CanActivateChild {

  constructor(private userService: UserService, private router: Router) { }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> {
    let stream$: Observable<IUser | null>;
    if (this.userService.currentUser === undefined) {
      stream$ = this.userService.getCurrentUserProfile();
    } else {
      stream$ = of(this.userService.currentUser);
    }

    return stream$.pipe(
      map((user) => {
        const isLoggedFromData = childRoute.data.isLogged;
        const isAdminFromData = childRoute.data.isAdmin;
        if (!!isLoggedFromData) {
          return typeof isLoggedFromData !== 'boolean' || isLoggedFromData === !!user;
        }
        if (!!isAdminFromData) {
          return typeof isAdminFromData !== 'boolean' || isAdminFromData === user?.isAdmin;
        }
        return true;
      }),
      tap((canContinue) => {
        if (canContinue) { return; }
        const url = this.router.url;
        this.router.navigateByUrl(url);
      }),
    );
  }
}

