import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SubscriptionsComponent } from './components/subscriptions/subscriptions.component';
import {ProfileComponent} from "./components/profile/profile.component";
import {AuthGuard} from "./oauth/auth.guard";
import { LogoutComponent } from './components/logout/logout.component';

const routes: Routes = [
  // { path: "subscriptions", component: SubscriptionsComponent,  pathMatch: "full", canActivate: [AuthGuard] },
  // { path: "profile", component: ProfileComponent,  pathMatch: "full", canActivate: [AuthGuard] },
  // { path: '**', redirectTo: 'subscriptions' }
  { path: "subscriptions", component: SubscriptionsComponent,  pathMatch: "full" },
  { path: "profile", component: ProfileComponent,  pathMatch: "full" },
  { path: "logout", component: LogoutComponent,  pathMatch: "full" },
  { path: '**', redirectTo: 'subscriptions' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
