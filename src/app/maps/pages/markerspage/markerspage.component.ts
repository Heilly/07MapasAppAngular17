import { AfterViewInit, Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LngLat, Map } from 'mapbox-gl';


@Component({
  selector: 'app-markerspage',
  templateUrl: './markerspage.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class MarkerspageComponent implements AfterViewInit{

  @ViewChild('map') divMap? : ElementRef;
  
  public zoom = signal<number>(5);
  public map? : Map;
  public lngLat? : LngLat = new LngLat(-74.5, 40);

  ngAfterViewInit(): void {
    const map = new Map({
    container: this.divMap?.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: [-74.5, 40], // starting position [lng, lat]
    zoom: 3, // starting zoom
  });
  }

}
