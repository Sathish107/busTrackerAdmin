import Map from './Map'
import Form from './Form'
import { useState } from 'react'

const Main=()=>{
    const [markers,setMarkers]=useState([])
    const [routes,setRoutes]=useState([])
    const [routeCoords,setRouteCoords]=useState([])

    const [stopCoords,setStopCoords]=useState([])
    const [routeNo,setRouteNo]=useState('')
    const [labelName,setLabelName]=useState('Stop Name')
    const [isNameEntered,setIsNameEntered]=useState(true)
    const [stopName,setStopName]=useState('')
    const [stops,setStops]=useState([])

    const [isRemoved,setIsRemoved]=useState(false)
    const [isSubmitted,setIsSubmitted]=useState(false)


    const handleAddStop=()=>{
        if(stopName){
            const id=(stops.length)?stops[stops.length-1].id+1 : 1
            const newStop={
                id:id,
                stopName:stopName,
                latlng:[stopCoords[stopCoords.length-1][0],stopCoords[stopCoords.length-1][1]]
            }
            setStops((prevstops)=>[...prevstops,newStop])
            setIsNameEntered(true)
            setLabelName('Stop Name')
            setStopName('')
        }
    }

    const handleRemove=(id)=>{
        const newStops=stops.filter((stop)=>(id!==stop.id))
        setStops(newStops)
        setIsRemoved(true)
    }

    const [reducedCoords,setReducedCoords]=useState([])
    const [slopes,setSlopes]=useState([])
    const generateReducedRoute=()=>{
        var tempCoords=routeCoords
        for(var i=0;i<tempCoords.length-1;i++){
            slopes[i]=(tempCoords[i+1].lng-tempCoords[i].lng)/(tempCoords[i+1].lat-tempCoords[i].lat)
        }  

        for(var i=0,
            pos=0; 
            i<slopes.length-1;i++){ 
            while(slopes[i+1+pos]-slopes[i]<= 0.17 && slopes[i+1+pos]-slopes[i]>=0){
                tempCoords[i+1+pos]=0
                pos++
            }
            while(slopes[i+1+pos]-slopes[i]>=-0.17 && slopes[i+1+pos]-slopes[i]<0){
                tempCoords[i+1+pos]=0
                pos++
            }
            reducedCoords.push(tempCoords[i])
            i+=pos
            pos=0
        }

        if(routeCoords[routeCoords.length-2]){
            reducedCoords.push(tempCoords[tempCoords.length-2])
        }
        reducedCoords.push(tempCoords[tempCoords.length-1])  
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()
        generateReducedRoute()
        const newRoute={
            routeNo:routeNo,
            stops:stops,
            routeCoords:reducedCoords
        }
        const url="http://localhost:2000/routes"
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newRoute)
        }
        const response=await fetch(url,options)
        console.log(response)

        setIsSubmitted(true)
        setRouteNo('')
        setStopCoords([])
        setStops([])
        setSlopes([])
        setReducedCoords([])
        
    }

    return(
        <main className='AddRoute-main'>
            <Map 
                markers={markers}
                setMarkers={setMarkers}
                routes={routes}
                setRoutes={setRoutes}
                routeCoords={routeCoords}
                setRouteCoords={setRouteCoords}
                stopCoords={stopCoords}
                setStopCoords={setStopCoords}
                isNameEntered={isNameEntered}
                setIsNameEntered={setIsNameEntered}
                isRemoved={isRemoved}
                setIsRemoved={setIsRemoved}
                isSubmitted={isSubmitted}
                setIsSubmitted={setIsSubmitted}
            />
            <Form 
                stopCoords={stopCoords}
                routeNo={routeNo}
                setRouteNo={setRouteNo}
                labelName={labelName}
                setLabelName={setLabelName}
                stopName={stopName}
                setStopName={setStopName}
                stops={stops}
                handleAddStop={handleAddStop}
                handleRemove={handleRemove}
                handleSubmit={handleSubmit}
            />
        </main>
    )
}

export default Main