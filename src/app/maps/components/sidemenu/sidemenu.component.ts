import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';

interface MenuItem {
  name: string,
  router: string,
  icon: string
}

@Component({
  selector: 'maps-sidemenu',
  templateUrl: './sidemenu.component.html',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
})
export class SidemenuComponent {

  public menuItem: MenuItem[] = [
    { name: 'Full Screen', router: '/maps/fullscreenpage', icon: 'location_on'},
    { name: 'ZoomRange', router: '/maps/zoompage', icon: 'zoom_in'},

    { name: 'Markers', router: '/maps/markerspage', icon: 'person_pin_circle'},
    { name: 'House', router: '/maps/propertypage', icon: 'home_pin'},
  ]

}
