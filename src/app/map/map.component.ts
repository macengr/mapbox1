import { Component, OnInit } from '@angular/core';
import * as mapboxgl from 'mapbox-gl';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    (mapboxgl as any).accessToken = environment.mapbox.accessToken;
    
    // 'pk.eyJ1Ijoia2FybGllbSIsImEiOiJjamdvY2kzbXcxdnh6Mndud3hiZTFzOWgxIn0.zsOQZexqVZ8gGEsoL9yvcA';

    const map = new mapboxgl.Map({
      container: 'mapElem', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [-79.9959, 40.4406], // starting position [lng, lat]
      zoom: 9 // starting zoom
      });
  }

}
