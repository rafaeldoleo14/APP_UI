import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.css',
})
export class AuthFormComponent {
  constructor(private authService: AuthService, private router: Router) {}

  get userForm(): FormGroup {
    return this.authService.getUserForm;
  }

  onSubmit(): void {
    console.log(this.userForm.getRawValue());
    const isLogged = this.authService.onLogin();

    console.log(isLogged);

    if (!isLogged) return;

    this.router.navigateByUrl('/products');
  }
}
