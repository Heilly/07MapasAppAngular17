import { Component, ElementRef, OnDestroy, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LngLat, Map } from 'mapbox-gl';

@Component({
  selector: 'app-zoompage',
  templateUrl: './zoompage.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class ZoompageComponent implements OnDestroy {
  

  @ViewChild('map') divMap? : ElementRef;

  public zoom = signal<number>(5);
  public map? : Map;
  public lngLat? : LngLat = new LngLat(-74.5, 40);

  ngAfterViewInit(): void {
    this.map = new Map({
      container: this.divMap?.nativeElement, // container ID
      style: 'mapbox://styles/mapbox/streets-v12', // style URL
      center: this.lngLat, // starting position [lng, lat]
      zoom: this.zoom(), // starting zoom
    });
    //console.log(this.map);
  this.mapListener();
  }
  ngOnDestroy(): void {
    this.map?.remove();
  }

  //listener, para saber cuando cambia el zoom
  mapListener() {
    if( !this.map ) throw 'El mapa no existe';
    this.map.on('zoom', (ev) => {
      this.zoom.set(this.map!.getZoom());
    } );

    if( !this.map ) throw 'EL mapa no existe';
    this.map.on('zoomend', (ev) => {
      if(this.map!.getZoom() < 18 ) return;
      this.map?.zoomTo(18);
      this.zoom.set(this.map!.getZoom());
    } );

    this.map.on('move', (ev) => {
      this.lngLat = this.map?.getCenter();
      const { lng, lat } = this.lngLat!

      
    })
  }


  zoomIn(){
    this.map?.zoomIn();
  }

  zoomOut(){
    this.map?.zoomOut();
  }

  zoomChanged( value: string){
    this.zoom.set( Number(value) );
    this.map?.zoomTo(Number(value));
  }
}
