import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { login, loginSuccess, loginFailure } from './auth.actions';
import { catchError, map, of, switchMap, delay } from 'rxjs';

@Injectable()
export class AuthEffects {
  constructor(private actions$: Actions) {}

  login$ = createEffect(() =>
    this.actions$.pipe(
      ofType(login),
      switchMap(({ email, password }) =>
        // Simulate an API call with delay
        of({ id: 1, name: 'John Doe', email }).pipe(
          delay(1000), // Simulate network delay
          map((user) => loginSuccess({ user })),
          catchError(() => of(loginFailure({ error: 'Invalid credentials' })))
        )
      )
    )
  );
}
