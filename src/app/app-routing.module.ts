import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';

const routes: Routes = [
  { path: "subscriptions", component: SubscriptionsComponent,  pathMatch: "full" },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
