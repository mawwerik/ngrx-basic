import { createReducer, on } from '@ngrx/store';
import { login, loginSuccess, loginFailure, logout } from './auth.actions';
import { AuthState, initialAuthState } from './auth.state';

export const authReducer = createReducer(
  initialAuthState,

  on(login, (state) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(loginSuccess, (state, { user }) => ({
    ...state,
    user,
    isAuthenticated: true,
    loading: false,
    error: null
  })),

  on(loginFailure, (state, { error }) => ({
    ...state,
    user: null,
    isAuthenticated: false,
    loading: false,
    error
  })),

  on(logout, () => initialAuthState)
);
