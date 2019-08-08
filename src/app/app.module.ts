import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ListofcitiesComponent } from './listofcities/listofcities.component';
import {AppService} from '../app/app.service';
import { mpInterceptor } from './mpInterceptor';
import { ActualWeatherInfoComponent } from './actual-weather-info/actual-weather-info.component';

import { AppRoutingModule, routingComponents } from './app-routing.module';

import { ViewPicComponent } from './view-pic/view-pic.component';

@NgModule({
  declarations: [
    AppComponent,
    ListofcitiesComponent,
    ActualWeatherInfoComponent,
    ViewPicComponent,
    routingComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [AppService, {provide: HTTP_INTERCEPTORS, useClass: mpInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
