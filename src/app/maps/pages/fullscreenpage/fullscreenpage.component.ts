import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Map } from 'mapbox-gl';


@Component({
  selector: 'app-fullscreenpage',
  templateUrl: './fullscreenpage.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class FullscreenpageComponent implements AfterViewInit{

  @ViewChild('map') divMap? : ElementRef;

  ngAfterViewInit(): void {
    const map = new Map({
    container: this.divMap?.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [ -3.31, 40.66], // starting position [lng, lat]
    zoom: 3, // starting zoom
  });
  }

  
  
}
