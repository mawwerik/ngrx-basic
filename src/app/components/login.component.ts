import { Component, inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { login, logout } from '../state/auth.actions';
import { selectIsAuthenticated, selectAuthLoading, selectAuthError } from '../state/auth.selectors';
import { AsyncPipe } from "@angular/common";

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    AsyncPipe
  ],
  template: `
    @if ((loading$ | async)) {
      <div>Logging in...</div>
    }
    @if ((error$ | async); as error) {
      <div class="error">{{ error }}</div>
    }

    <button (click)="login()">Login</button>
    @if ((isAuthenticated$ | async)) {
      <button (click)="logout()">Logout</button>
    }
    `
})
export class LoginComponent {
  private store = inject(Store);

  isAuthenticated$ = this.store.select(selectIsAuthenticated);
  loading$ = this.store.select(selectAuthLoading);
  error$ = this.store.select(selectAuthError);

  login() {
    this.store.dispatch(login({ email: 'user@example.com', password: 'password123' }));
  }

  logout() {
    this.store.dispatch(logout());
  }
}
