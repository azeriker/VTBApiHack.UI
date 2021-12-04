import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title(title: any) {
    throw new Error('Method not implemented.');
  }

 
  readonly tabs = [
      'Мои Подписки',
      'Выход'
  ];

  activeElement = String(this.tabs[0]);

  open = false;

  get activeItemIndex(): number {
      return this.tabs.indexOf(this.activeElement);
  }

  stop(event: Event) {
      // We need to stop tab custom event so parent component does not think its active
      event.stopPropagation();
  }

  onClick(activeElement: string) {
      this.activeElement = activeElement;
      this.open = false;
  }

}
