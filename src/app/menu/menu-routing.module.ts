import { NgModule } from '@angular/core';

import { RouterModule, Routes, UrlSegment } from '@angular/router';
import { AuthGuard } from '../guards/auth.guard';
import { DashboardComponent } from './dashboard/dashboard.component';
import { MenusComponent } from './menus/menus.component';
import { SignonformComponent } from '../login/signonform/signonform.component';
import { ResidentmasterComponent } from '../resident/residentmaster/residentmaster.component';


// tslint:disable-next-line: whitespace
// tslint:disable-next-line: typedef-whitespace
const routes: Routes = [
  {path: 'dashboard', canActivate: [AuthGuard],
    component: DashboardComponent ,
  children : [
  { path: 'main', component: MenusComponent },
   {path: 'login', component: SignonformComponent},
   {path: 'resident',component:ResidentmasterComponent },
   

],


  },

  {path: '**', redirectTo: 'login', pathMatch: 'full'},

];


@NgModule({
  declarations: [],
  // imports: [RouterModule.forRoot(routes, {onSameUrlNavigation: "reload"})],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class MenuRoutingModule { }
