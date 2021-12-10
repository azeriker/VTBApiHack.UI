import {Injectable} from "@angular/core";
import {ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, UrlTree} from "@angular/router";
import {Observable} from "rxjs";
import {OAuthService} from "angular-oauth2-oidc";

@Injectable()
export class AuthGuard implements CanActivate {
  constructor(private _oauthService: OAuthService) {}

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<boolean|UrlTree>|Promise<boolean|UrlTree>|boolean|UrlTree {
    console.log('this._oauthService.hasValidAccessToken()', this._oauthService.hasValidAccessToken());
    if (!this._oauthService.hasValidAccessToken()) {
      this._oauthService.initLoginFlow();
      return false;
    } else {
      return true;
    }
  }
}
