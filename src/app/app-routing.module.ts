import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

  {
    path:'',
    loadChildren:()=>import('./home/home.module').then(m=>m.HomeModule)
  },
  {
    path:'productos',
    loadChildren:()=>import('./products/products.module').then(m=>m.ProductsModule)
  },
  {
    path:'proceso',
    loadChildren:()=>import('./process/process.module').then(m=>m.ProcessModule)
  },
  {
    path:'administracion',
    loadChildren:()=>import('./management/management.module').then(m=>m.ManagementModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
