import { ApplicationConfig } from '@angular/core';
import {
  provideRouter,
  withComponentInputBinding,
  withViewTransitions,
} from '@angular/router';

import { routes } from './app.routes';
import {
  provideClientHydration,
  withHttpTransferCacheOptions,
  withNoHttpTransferCache,
} from '@angular/platform-browser';
import {
  provideHttpClient,
  withFetch,
  withInterceptors,
} from '@angular/common/http';
import { ErrorResponseInterceptor } from './shared/error-response-interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes, withComponentInputBinding(), withViewTransitions()),
    provideClientHydration(
      //withNoHttpTransferCache(), //Desactivar la cache em las peticiones http, hace que se repitan las solicitudes
      withHttpTransferCacheOptions({
        includePostRequests: true,
      })
    ),
    provideHttpClient(
      withFetch(),
      withInterceptors([ErrorResponseInterceptor])
    ),
  ],
};
