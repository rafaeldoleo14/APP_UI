import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProductPageComponent } from './pages/main-product-page/main-product-page.component';

const routes: Routes = [
  {
    path: 'products',
    component: MainProductPageComponent,
  },

  {
    path: '**',
    redirectTo: 'products',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductsRoutingModule {}
