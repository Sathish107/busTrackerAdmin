import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import myMarkerImage from './myMarker1.png';
import { useEffect } from 'react';

const Map=({route})=>{ 
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

        const start=L.latLng(route.stops[0].latlng[0],route.stops[0].latlng[1])
        const destination=L.latLng(route.stops[(route.stops).length-1].latlng[0],route.stops[(route.stops).length-1].latlng[1])
        let corner1,corner2
        if(start.lat>destination.lat){
            corner1=L.latLng(start.lat+0.1,start.lng+0.1)
            corner2=L.latLng(destination.lat-0.1,destination.lng-0.1)
        }else{
            corner1=L.latLng(start.lat-0.1,start.lng-0.1)
            corner2=L.latLng(destination.lat+0.1,destination.lng+0.1)
        }

        const bounds = L.latLngBounds(
            corner1,corner2
        );

        map.flyToBounds(bounds,{
            duration:2.5,
            easeLinearity:0.25
        })

        route.stops.forEach((stop) => {
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