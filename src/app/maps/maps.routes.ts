import { Routes } from '@angular/router';
import { MaplayoutComponent } from './layout/maplayout/maplayout.component';
import { FullscreenpageComponent } from './pages/fullscreenpage/fullscreenpage.component';
import { MarkerspageComponent } from './pages/markerspage/markerspage.component';
import { PropertypageComponent } from './pages/propertypage/propertypage.component';
import { ZoompageComponent } from './pages/zoompage/zoompage.component';


export const MAPS_ROUTES: Routes = [
  { 
    path: '', 
    component: MaplayoutComponent,
    children: [
      { path: 'fullscreenpage', component: FullscreenpageComponent },
      { path: 'markerspage', component: MarkerspageComponent },
      { path: 'propertypage', component: PropertypageComponent },
      { path: 'zoompage', component: ZoompageComponent },
      { path: '**', redirectTo: 'fullscreenpage'}
    ]
  },
];
