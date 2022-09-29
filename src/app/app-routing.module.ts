import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignonformComponent } from './login/signonform/signonform.component';
import { ResidentmasterComponent } from './resident/residentmaster/residentmaster.component';


const routes: Routes = [
  {path: 'login', component: SignonformComponent},


       {path: '', redirectTo: 'login', pathMatch: 'full'}
      
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
