import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductsAdminComponent } from './products-admin/products-admin.component';

const routes: Routes = [
  { 
    path: '', 
    redirectTo: 'products-admin', 
    pathMatch: 'full'
   },
  {
    path: 'products-admin',
    component: ProductsAdminComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
