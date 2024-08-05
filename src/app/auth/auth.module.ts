import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AuthFormComponent } from './components/auth-form/auth-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProductsRoutingModule } from '../products/products-routing.module';
import { AuthRoutingModule } from './auth-routing.module';

@NgModule({
  declarations: [LoginPageComponent, AuthFormComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRoutingModule],
  exports: [LoginPageComponent],
})
export class AuthModule {}
