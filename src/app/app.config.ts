import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient, withFetch,HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthServiceService } from './services/auth-service.service';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),provideHttpClient(withFetch()),
   { provide: HTTP_INTERCEPTORS,
    useClass:AuthServiceService,
    multi: true}]
};
