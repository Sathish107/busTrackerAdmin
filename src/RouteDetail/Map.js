import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import myMarkerImage from './myMarker1.png';
import { useEffect } from 'react';

const Map=({route})=>{
    console.log(route)
    let map,myMarker

    useEffect(()=>{
        map = L.map('map').setView([12.9889,79.9702],5)

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 20 
        }).addTo(map); 

        myMarker=L.icon({
            iconUrl:myMarkerImage,
            iconSize:[40,40],
            iconAnchor: [17, 41],
            popupAnchor: [0, -30]
        }) 

        route.stops.forEach((stop) => {
            console.log(stop)
            L.marker(stop.latlng,{icon:myMarker}).bindPopup(`<b>${stop.stopName}<b>`).addTo(map).openPopup()
        });

        L.polyline(route.routeCoords,{
            color: 'red',
            smoothFactor:0.0001
        }).addTo(map)

        return () => {
            map.remove();
        };
    },[],)

    return(
        <div className='mapContainer'>
            <div id="map"></div>
        </div>
    )
}

export default Map