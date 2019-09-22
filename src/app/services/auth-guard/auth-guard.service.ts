import { Injectable } from '@angular/core';
import {
  CanActivate,
  Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
} from '@angular/router';
import { UtilityService } from '../utility/utility.service';
import { RouterEnum } from 'src/app/enums/notes-app.enum';
import { NotesAppContants } from 'src/app/constants/notes-app.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private utilityService: UtilityService, private router: Router) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.utilityService.isLoggedin) {
      return true;
    } else {
      this.utilityService.openSnackBar(
        NotesAppContants.LOGIN_REQUIRED_MSG,
        'Okay'
      );
      this.router.navigate([RouterEnum.LOGIN]);
      return false;
    }
  }
}
