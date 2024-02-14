import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: 'maps',
        loadChildren: () => import('./maps/maps.routes').then( r => r.MAPS_ROUTES )
    },{
        path: '**',
        redirectTo: 'maps'
    }
];
