import { ViewPicComponent } from './view-pic/view-pic.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [{ path: 'pictures/:id', component: ViewPicComponent},
{ path: 'pictures', component: ViewPicComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ViewPicComponent];
