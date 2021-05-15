import { TechComponent } from './tech/tech.component';
import { HealthComponent } from './health/health.component';
import { SportsComponent } from './sports/sports.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { BusinessComponent } from './business/business.component';
import { TopheadingComponent } from './topheading/topheading.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',component:TopheadingComponent, pathMatch: 'full'
  },
  {
    path: 'business',component:BusinessComponent
  },
  {
    path: 'enter',component:EntertainmentComponent
  },
  {
    path: 'sports',component:SportsComponent
  },
  {
    path: 'health',component:HealthComponent
  },
  {
    path: 'tech',component:TechComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
