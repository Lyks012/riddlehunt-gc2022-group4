import React, { useState } from "react";
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

import '../../../node_modules/leaflet/dist/leaflet.css';
import '../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css';
import './map.css';

let map: L.Map= L.map(document.createElement('div'));

interface Waypoints{
    lat:number,
    long:number,
}




const Map: React.FC<Waypoints> = (props:Waypoints)=> {
    
        return (
        
        <MapContainer center={[props.lat, props.long]} zoom={13}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[51.505, -0.09]}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>
          </MapContainer>);

}

export default Map;