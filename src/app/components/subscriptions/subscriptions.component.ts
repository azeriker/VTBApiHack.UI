import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Injector } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PolymorpheusComponent } from '@tinkoff/ng-polymorpheus';
import { TuiDialogService } from '@taiga-ui/core';
import { AddSubscriptionDialogComponent } from '../add-subscription-dialog/add-subscription-dialog.component';
import { HttpService } from 'src/app/services/http.service';
import { Subscription } from 'src/app/models/subscription';


@Component({
  selector: 'app-subscriptions',
  templateUrl: './subscriptions.component.html',
  styleUrls: ['./subscriptions.component.less']
})
export class SubscriptionsComponent {

  private readonly dialog = this.dialogService.open<number>(
    new PolymorpheusComponent(AddSubscriptionDialogComponent, this.injector),
    {
      data: 237,
      dismissible: true,
      label: 'Создать подписку',
    },
  );
  subscriptions: Subscription[];

  constructor(@Inject(TuiDialogService) private readonly dialogService: TuiDialogService, @Inject(Injector) private readonly injector: Injector, private httpService: HttpService) {
    this.subscriptions = new Array<Subscription>();
  }

  ngOnInit(): void {
    this.httpService.getSubscriptions().subscribe(
      ((data: Subscription[]) => {
        this.subscriptions = data;
      }));

  }

  showDialog() {
    this.dialog.subscribe({
      next: data => {
        console.log('Dialog emitted data = ' + data);
      },
      complete: () => {
        console.log('Dialog closed');
      },
    });
  }
}


