import {Component} from '@angular/core';
import {NavigationEnd, Router} from "@angular/router";
import {OAuthService} from "angular-oauth2-oidc";
import {authCodeFlowConfig} from "./oauth/oauth.config";

interface TabItem {
  name: string;
  link: string;
  icon?: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  readonly tabs: TabItem[] = [
    { name: "Подписки", link: 'subscriptions' },
    { name: "Профиль", link: 'profile' }
  ]

  public activeElementIndex = 0;

  constructor(private _router: Router, private _oauthService: OAuthService) {
    _oauthService.configure(authCodeFlowConfig);
    _oauthService.loadDiscoveryDocumentAndTryLogin().then(res => {
      const isLoggedIn = _oauthService.hasValidAccessToken();
      if (!isLoggedIn) {
        this._oauthService.initLoginFlow();
      }
    });
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = event.url.substring(1, event.url.length);
        this.activeElementIndex = this.tabs.findIndex(x => x.link === route);
      }
    });
  }
}
