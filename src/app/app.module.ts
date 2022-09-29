import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginModule } from './login/login.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {  HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HttpinterceptorService } from './services/httpinterceptor.service';
import { MenuModule } from './menu/menu.module';
import { ResidentModule } from './resident/resident.module';

@NgModule({
  declarations: [
    AppComponent
  
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    
    AppRoutingModule,
    BrowserAnimationsModule,
    LoginModule,
    SharedModule,
    MenuModule,
    ResidentModule
   
    
  ],
  providers: [
    [{provide :HTTP_INTERCEPTORS,useClass:HttpinterceptorService,multi:true}]
  ],
   
  bootstrap: [AppComponent]
})
export class AppModule { }
