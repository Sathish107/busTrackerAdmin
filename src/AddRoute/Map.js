import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import 'leaflet-routing-machine/dist/leaflet-routing-machine.css';
import 'leaflet-routing-machine';
import myMarkerImage from './myMarker1.png';
import { useEffect } from 'react';

const newStopCoords=[]
let map
let myMarker
let count=0
let marker
let route

const Map = ({
    stopCoords,setStopCoords,
    isNameEntered,setIsNameEntered,
    markers,setMarkers,
    routes,setRoutes,
    routeCoords,setRouteCoords,
    isRemoved,setIsRemoved,
    isSubmitted,setIsSubmitted
}) => {
    useEffect(()=>{
        if(isRemoved&&isNameEntered){
            setMarkers((previousMarkers)=>{
                map.removeLayer(previousMarkers[previousMarkers.length-1])
                return(previousMarkers.slice(0,previousMarkers.length-1))
            }) 

            if(routes.length&&routeCoords.length){
                setRoutes((previousRoutes)=>{
                    previousRoutes[previousRoutes.length-1].setWaypoints([])
                    return(previousRoutes.slice(0,previousRoutes.length-1))
                })
    
                setRouteCoords((previousRouteCoords)=>{
                    return(previousRouteCoords.slice(0,previousRouteCoords.length-1))
                })
            }

            setIsRemoved(false)
        }
    },[isRemoved])


  useEffect(()=>{

    map = L.map('map').setView([12.9889,79.9702],5)

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 20 
    }).addTo(map); 

    myMarker=L.icon({
      iconUrl:myMarkerImage,
      iconSize:[40,40],
      iconAnchor: [17, 41]
    }) 


    return () => {
      map.remove();
    };
  },[],)


  useEffect(()=>{
    const handleMapClick=(e)=>{
        if(isNameEntered){
            setIsNameEntered(false)
            newStopCoords[0]=[
                e.latlng.lat,
                e.latlng.lng
            ]
      
            setStopCoords((prevStopCoords) => [...prevStopCoords, [e.latlng.lat, e.latlng.lng]]);
            count++
            marker=L.marker([e.latlng.lat,e.latlng.lng],{icon:myMarker}).addTo(map)
            setMarkers((previousMarkers)=>[...previousMarkers,marker])
    
            if(count>1){
    
                const length = stopCoords.length
                route=L.Routing.control({
                    waypoints: [
                        stopCoords[length-1],
                        newStopCoords[0]
                    ],
                    routeWhileDragging: true,
                    show:false,
                    createMarker: function() { return null; }
                }).addTo(map)
                
                setRoutes((previousRoutes)=>[...previousRoutes,route])
    
                route.on('routesfound',(e)=>{ 
                    setRouteCoords((previousRouteCoords)=>previousRouteCoords.concat(e.routes[0].coordinates)) 
                })
            }        
        }
    } 

    map.on('click',handleMapClick);

    return()=>{
        map.off('click',handleMapClick)
    }
  },[isNameEntered])


  useEffect(()=>{
    markers.forEach(element => {
        map.removeLayer(element)
    })
    routes.forEach(element=>{
        element.setWaypoints([])
    })
    map.setView([12.9889,79.9702],5)

    setMarkers([])
    setRoutes([])
    setRouteCoords([])
    setIsSubmitted(false)
  },[isSubmitted])


  return (
    <div className='mapContainer'>
      <div id="map"></div>
    </div>
  )
}

export default Map
