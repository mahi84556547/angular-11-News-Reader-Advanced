import { NewsapiService } from './SERVICE/newsapi.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { HttpClientModule } from '@angular/common/http'
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BusinessComponent } from './business/business.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { SportsComponent } from './sports/sports.component';
import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client'

@NgModule({
  declarations: [
    AppComponent,
    TopheadingComponent,
    BusinessComponent,
    EntertainmentComponent,
    SportsComponent,
    TechComponent,
    HealthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,HttpClientModule,IvyCarouselModule,
     BrowserAnimationsModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
