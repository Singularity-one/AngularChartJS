import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ChartJsComponent } from './chart-js/chart-js.component';


const routes: Routes = [
    {path: 'chart-js',component: ChartJsComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes,{
    enableTracing: true
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }