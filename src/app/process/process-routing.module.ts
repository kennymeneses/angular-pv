import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CartComponent } from './components/cart/cart.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ProcessComponent } from './process.component';

const routes: Routes = [
{
  path:'',
  component:ProcessComponent,
  children:[
    {
      path:'carrito',
      component:CartComponent,
    },
    {
      path:'checkout',
      component:CheckoutComponent
    }
  ]
}
  

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProcessRoutingModule { }
