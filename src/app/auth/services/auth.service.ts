import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import users from '../../../../assets/users.json';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private userForm = new FormGroup({
    email: new FormControl<string>(''),
    password: new FormControl<string>(''),
  });

  constructor(private http: HttpClient) {}

  get getUserForm(): FormGroup {
    return this.userForm;
  }

  onLogin(): boolean {
    const allUsers = users.users;

    const currentUser = {
      username: this.userForm.value.email,
      password: this.userForm.value.password,
    };

    const isLogged = allUsers.some(
      (user) =>
        user.username === currentUser.username &&
        user.password === currentUser.password
    );

    return isLogged;
  }
}
