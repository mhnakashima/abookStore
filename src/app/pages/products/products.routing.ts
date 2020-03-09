import { Routes } from '@angular/router';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListProductComponent } from './list-product/list-product.component';
import { ProductsComponent } from './products.component';

export const routes: Routes = [
    { path: '', component: ProductsComponent },
    { path: 'add', component: AddProductComponent },
    { path: 'edit/:id', component: EditProductComponent },
    { path: 'list', component: ListProductComponent },
];