import { Component, Inject, Injector, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { TuiPaymentSystem } from '@taiga-ui/addon-commerce';
import { TuiDialogContext, TuiDialogService } from '@taiga-ui/core';
import { POLYMORPHEUS_CONTEXT } from '@tinkoff/ng-polymorpheus';
import {Clipboard} from '@angular/cdk/clipboard';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-credentials-dialog',
  templateUrl: './credentials-dialog.component.html',
  styleUrls: ['./credentials-dialog.component.less']
})
export class CredentialsDialogComponent implements OnInit {

  readonly paymentSystem = TuiPaymentSystem.Mastercard;
  readonly brandLogo = 'assets/svg/vtb-logo.svg';
  form = new FormGroup({
    card: new FormControl(''),
    expire: new FormControl(''),
    cvc: new FormControl(''),
    name: new FormControl(''),
  });
  isCopied = false;
  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(Injector) private readonly injector: Injector,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<boolean>,
    private clipboard: Clipboard,
    private snackBar: MatSnackBar
  ) { }

  data: any;
  ngOnInit(): void {

    this.data = this.context.data;
    this.form = new FormGroup({
      card: new FormControl({value: this.data.encryptedPan, disabled: true}),
      expire: new FormControl({value: this.data.cardExpiry, disabled: true}),
      cvc: new FormControl({value: this.data.cvv, disabled: true}),
      name: new FormControl({value: this.data.embossingName, disabled: true}),
    });
  }

  copyData(data: string){
    this.clipboard.copy(data);
    this.snackBar.open('Данные скопированы', 'Ок');
  }

  close(): void{
    this.context.completeWith(true);
  }

}
