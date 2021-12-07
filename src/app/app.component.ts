import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from "@angular/router";

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

  constructor(private _router: Router) {
    this._router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        const route = event.url.substring(1, event.url.length);
        this.activeElementIndex = this.tabs.findIndex(x => x.link === route);
      }
    });
  }
}
