import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import mapboxgl from 'mapbox-gl'; // or "const mapboxgl = require('mapbox-gl');"
(mapboxgl as any).accessToken = 'pk.eyJ1IjoiaGVpbGx5IiwiYSI6ImNsb3d4ejZmcDE2emYya3FlZmN0YmMzOTUifQ.HEF82RwDJnVqy-J5y4X-lA';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(routes),
    
    
  ]
};
