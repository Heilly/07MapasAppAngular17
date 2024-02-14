import { AfterContentChecked, AfterViewInit, Component, ElementRef, ViewChild, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LngLat, Map, Marker, Popup } from 'mapbox-gl';
import { MarkerAndColor } from '../../interfaces/markerAndColor.interface';
import { PlainMarkers } from '../../interfaces/plainMarkers.interface';



@Component({
  selector: 'app-markerspage',
  templateUrl: './markerspage.component.html',
  standalone: true,
  imports: [CommonModule],
})
export class MarkerspageComponent implements AfterViewInit{

  @ViewChild('map') divMap? : ElementRef;

  public markers: MarkerAndColor[] = [];

  
  public map? : Map;
  public currentLngLat? : LngLat = new LngLat(-3.31, 40.66);

  ngAfterViewInit(): void {
    if(  !this.divMap ) throw 'No existe el mapa';
    this.map = new Map({
    container: this.divMap?.nativeElement, // container ID
    style: 'mapbox://styles/mapbox/streets-v12', // style URL
    center: this.currentLngLat, // starting position [lng, lat]
    zoom: 7, // starting zoom
  });

  this.readFromLocalStorage();
  

// add markers to map

  // create a HTML element for each feature
  /*const markerHTML = document.createElement('div');
  markerHTML.className = 'marker';
   
  // make a marker for each feature and add it to the map
  new Marker({
    color: 'red'
  })
    .setLngLat(this.currentLngLat!)
    .setPopup(
      new Popup({ offset: 25 }) // add popups
      .setHTML( `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`))
    .addTo(map);*/
}


createMarket(){  
  if ( !this.map ) throw 'no existe mapa';

  const color = '#xxxxxx'.replace(/x/g, y=>(Math.random()*16|0).toString(16));
  const lngLat = this.map!.getCenter();


  this.addMarker( lngLat, color);
}

addMarker( lngLat: LngLat, color: string ){
  if( !this.map) return;

  const marker = new Marker({
    color: color,
    draggable: true
  })
    .setLngLat(lngLat)
    .addTo(this.map);

    this.markers.push({
                    marker: marker, 
                    color: color
                  })
 this.saveToLocalStorage();

 marker.on('dragend', () => {
  this.saveToLocalStorage();
 })


}
deleteMarker( index : number ){
  
  this.markers[index].marker.remove();
  this.markers.splice(index, 1);
}
flyTo( marker: Marker ){
  this.map?.flyTo({
    zoom: 14,
    center: marker.getLngLat()
  })
  this.saveToLocalStorage();
}
saveToLocalStorage(){
  const plainMarkers: PlainMarkers[] = this.markers.map((colorMarker) => {
    return {
      color: colorMarker.color,
      lngLat: colorMarker.marker.getLngLat().toArray()
    }
  });
  console.log(plainMarkers);
  localStorage.setItem('markersLngLat', JSON.stringify(plainMarkers))

}
readFromLocalStorage(){
  const plainMarkersString = localStorage.getItem('markersLngLat') ?? '[]';
  const plainMarker: PlainMarkers[] = JSON.parse(plainMarkersString);
  
  plainMarker.forEach(marker => {
  const [ lng, lat ] = marker.lngLat;
  const coords = new LngLat( lng, lat )

    this.addMarker( coords, marker.color);
  } )
  
}


}
