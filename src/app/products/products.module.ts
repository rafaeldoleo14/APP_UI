import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainProductPageComponent } from './pages/main-product-page/main-product-page.component';
import { ProductsRoutingModule } from './products-routing.module';

@NgModule({
  declarations: [MainProductPageComponent],
  imports: [CommonModule, ProductsRoutingModule],
  exports: [MainProductPageComponent],
})
export class ProductsModule {}
