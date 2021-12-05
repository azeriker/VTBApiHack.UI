import { NgDompurifySanitizer } from "@tinkoff/ng-dompurify";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { TuiRootModule, TuiDialogModule, TuiNotificationsModule, TUI_SANITIZER, TuiSvgModule, TuiButtonModule, TuiPrimitiveCheckboxModule } from "@taiga-ui/core";
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TuiAccordionModule, TuiCheckboxModule, TuiDataListWrapperModule, TuiInputModule, TuiIslandModule, TuiMarkerIconModule, TuiSelectModule, TuiTabsModule } from "@taiga-ui/kit";
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import { TuiMoneyModule } from "@taiga-ui/addon-commerce";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { AddSubscriptionDialogComponent } from './components/add-subscription-dialog/add-subscription-dialog.component';
import { MatDialogModule } from "@angular/material/dialog";
import { HttpService } from "./services/http.service";
import { HttpClientModule } from "@angular/common/http";
import { PeriodPipe } from "./helpers/period.pipe";


@NgModule({
  declarations: [
    AppComponent,
    SubscriptionsComponent,
    AddSubscriptionDialogComponent,
    PeriodPipe
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
      TuiSelectModule
    


],
  providers: [HttpService, {provide: TUI_SANITIZER, useClass: NgDompurifySanitizer}],
  bootstrap: [AppComponent]
})
export class AppModule { }
