import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ResidentmasterComponent } from './residentmaster/residentmaster.component';
import { SharedModule } from '../shared/shared.module';
import { ResidentdetailComponent } from './residentdetail/residentdetail.component';



@NgModule({
  declarations: [ ResidentmasterComponent, ResidentdetailComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class ResidentModule { }
