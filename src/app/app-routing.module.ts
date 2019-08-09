
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PicturesComponent } from './pictures/pictures.component';
import { ListofcitiesComponent } from './listofcities/listofcities.component';

const routes: Routes = [
  { path: '', component: ListofcitiesComponent },
  { path: 'pictures', component: PicturesComponent }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [PicturesComponent];
