import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ManagementComponent } from './management.component';
import { SalesReportComponent } from './components/sales-report/sales-report.component';
import { ProductListEditComponent } from './components/product-list-edit/product-list-edit.component';

const routes: Routes = [
{
  path:'',
  component:ManagementComponent,
  children:[
    {
      path:'informe-ventas',
      component:SalesReportComponent
    },
    {
      path:'administrar-productos',
      component:ProductListEditComponent
    }
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ManagementRoutingModule { }
