import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MaterialModule } from '../../utils/material/material.module';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductsComponent } from './products.component';
import { routes } from './products.routing';
import { CardComponent } from '../../generics/card/card.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    MaterialModule,
    ReactiveFormsModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [
    ProductsComponent, 
    AddProductComponent, 
    EditProductComponent, 
    ListProductComponent,
    CardComponent
  ]
})
export class ProductsModule { }
