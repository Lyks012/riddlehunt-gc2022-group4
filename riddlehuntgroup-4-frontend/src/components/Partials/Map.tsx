import React, { useEffect, useState } from "react";
import * as L from 'leaflet';
import 'leaflet-routing-machine';
import { MapContainer, TileLayer, Marker, Popup, useMap, useMapEvents } from 'react-leaflet';

import '../../../node_modules/leaflet/dist/leaflet.css';
import '../../../node_modules/leaflet-routing-machine/dist/leaflet-routing-machine.css';
import './map.css';
import { timeEnd } from "console";
import { timeout } from "workbox-core/_private";

let map: L.Map = L.map(document.createElement('div'));
let marker;
const personIcon = new L.Icon({

    iconUrl: 'https://www.freeiconspng.com/thumbs/walking-icon/walking-icon-1.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]

});

/*map.locate({
    setView: true, 
    maxZoom: 16, 
    watch:false, 
    timeout: 60000,
});

let latlng: L.LatLngExpression;

function onLocationFound(e: { latlng: L.LatLngExpression; }) {
    L.marker(
        e.latlng,
        {
            icon: personIcon
        } 
    ).addTo(map);
}*/

interface Waypoints {
    lat: number,
    long: number,
}

function MyComponent() {
  useEffect(()=>{
      let view=true;
    let clickInterval= setInterval(() => {
        try {
            map.locate({
                setView: view,
            })
            console.log("viewing", view);
            view=false;
        } catch {
            
        }
    }, 5000)
   
  },[])
    let counter=0;
    
  
    const map = useMapEvents({
        // click: () => {
        //     console.log("click");

        //     map.locate({
        //         setView: true,
        //     })
        // },
        locationfound: (location) => {
         

            try{
                //console.log("borra");
                marker.removeFrom(map)
                
            }catch{}
            finally{
                marker =  L.marker(
                    location.latlng,
                    {
                        icon: personIcon
                    }
                ).addTo(map);   
            }
            
          
        }

    })
    return null;
}

const Map: React.FC<Waypoints> = (props: Waypoints) => {

    return (
        <MapContainer id="mapcontainer" center={[props.lat, props.long]} zoom={16}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {/* <Marker position={[33,33]} icon={personIcon}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker> */}

            <MyComponent />
        </MapContainer>
    );

}

export default Map;

