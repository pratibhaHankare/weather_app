
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';
import { ListofcitiesComponent } from './listofcities/listofcities.component';
import { ActualWeatherInfoComponent } from './actual-weather-info/actual-weather-info.component';

const routes: Routes = [
  { path: '', component: ListofcitiesComponent },
  { path: 'pictures', component: PicturesComponent },
  {path: 'weatherInfo/:id', component: ActualWeatherInfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PicturesComponent];
