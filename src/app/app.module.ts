import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import {
  TuiRootModule,
  TuiDialogModule,
  TuiNotificationsModule,
  TUI_SANITIZER,
  TuiSvgModule,
  TuiButtonModule,
  TuiPrimitiveCheckboxModule,
  TuiTextfieldControllerModule, TuiModeModule, TuiNotificationModule, TuiPrimitiveTextfieldModule, TuiScrollbarModule
} from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {
  TuiAccordionModule,
  TuiCheckboxLabeledModule,
  TuiCheckboxModule,
  TuiDataListWrapperModule,
  TuiInputCopyModule,
  TuiInputModule,
  TuiInputNumberModule,
  TuiIslandModule,
  TuiMarkerIconModule,
  TuiSelectModule,
  TuiTabsModule
} from "@taiga-ui/kit";
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { TuiCardModule, TuiCurrencyPipeModule, TuiInputCardModule, TuiInputCVCModule, TuiInputExpireModule, TuiMoneyModule } from "@taiga-ui/addon-commerce";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddSubscriptionDialogComponent } from './components/add-subscription-dialog/add-subscription-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { HttpService } from "./services/http.service";
import { HttpClientModule } from "@angular/common/http";
import { PeriodPipe } from "./helpers/period.pipe";
import { IsActivePipe } from "./helpers/autorenewal.pipe";
import { ProfileComponent } from './components/profile/profile.component';
import {TuiTableModule} from "@taiga-ui/addon-table";
import { SubscriptionPolicyPipe } from "./helpers/subscription-policy.pipe";
import { CredentialsDialogComponent } from './components/credentials-dialog/credentials-dialog.component';
import { ClipboardModule } from "@angular/cdk/clipboard";
import { MatSnackBarModule } from "@angular/material/snack-bar";




@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    AddSubscriptionDialogComponent,
    PeriodPipe,
    IsActivePipe,
    SubscriptionPolicyPipe,
    ProfileComponent,
    CredentialsDialogComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    TuiRootModule,
    BrowserAnimationsModule,
    TuiDialogModule,
    TuiNotificationsModule,
    TuiTabsModule,
    TuiAccordionModule,
    TuiSvgModule,
    TuiMoneyModule,
    TuiDataListWrapperModule,
    TuiSelectModule,
    TuiInputModule,
    FormsModule,
    ReactiveFormsModule,
    TuiButtonModule,
    TuiCheckboxModule,
    TuiPrimitiveCheckboxModule,
    TuiIslandModule,
    TuiMarkerIconModule,
    MatDialogModule,
    TuiSelectModule,
    TuiInputNumberModule,
    TuiInputModule,
    TuiCurrencyPipeModule,
    TuiTextfieldControllerModule,
    TuiCheckboxLabeledModule,
    TuiModeModule,
    TuiTableModule,
    TuiCardModule,
    TuiInputCardModule,
    TuiInputExpireModule,
    TuiInputCVCModule,
    TuiInputCopyModule,
    ClipboardModule,
    TuiNotificationModule,
    MatSnackBarModule,
    TuiPrimitiveTextfieldModule,
    TuiScrollbarModule


  ],
  providers: [HttpService, {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
