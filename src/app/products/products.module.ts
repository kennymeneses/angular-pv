import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { MaterialModule } from '../shared/material/material.module';
import { HttpClientModule } from '@angular/common/http';


import { ProductsRoutingModule } from './products-routing.module';
import { ProductsComponent } from './products.component';
import { ProductDescriptionComponent } from './components/product-description/product-description.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductCategoryListComponent } from './components/product-category-list/product-category-list.component';


@NgModule({
  declarations: [ProductsComponent, ProductDescriptionComponent, ProductListComponent, ProductCategoryListComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    MaterialModule,
    HttpClientModule
  ]
})
export class ProductsModule { }
