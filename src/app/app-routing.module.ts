import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OxComponent } from './ox/ox.component';

const routes: Routes = [{
  path:'ox' , component:OxComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
