import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import {Injectable} from "@angular/core";
import { AuthService } from './auth.service';
import { Observable } from "rxjs";

@Injectable()
export class AuthGuard  implements CanActivate {

    constructor(private authservice:AuthService,private router:Router){}
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {
        if(this.authservice.isAuth){
            return true;
        } else{
          this.router.navigate(['/auth']);
        }
        return false;
    }
}
