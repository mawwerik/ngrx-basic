import {ApplicationConfig, isDevMode} from '@angular/core';
import {provideRouter} from '@angular/router';

import {routes} from './app.routes';
import {provideStore} from '@ngrx/store';
import {provideEffects} from '@ngrx/effects';
import {provideStoreDevtools} from '@ngrx/store-devtools';
import {provideRouterStore} from '@ngrx/router-store';
import {authReducer} from "./state/auth.reducer";
import {AuthEffects} from "./state/auth.effects";

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    provideStore({ auth: authReducer }),
    provideEffects([AuthEffects]),
    provideStoreDevtools({
      maxAge: 25,
      logOnly: !isDevMode(),
    }),
    provideRouterStore(),
  ],
};
