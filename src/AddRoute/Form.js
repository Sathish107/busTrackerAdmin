import { useEffect } from "react"
import RouteNo from "./RouteNo"
import StopName from "./StopName"
import StopList from "./StopList"
import Button from "./Button"

const Form=({
    routeNo,setRouteNo,
    labelName,setLabelName,
    stopName,setStopName, 
    stopCoords,stops,
    handleAddStop,handleRemove,handleSubmit
})=>{

    useEffect(()=>{
        if(stopCoords[0]){
            setLabelName(`
                lat:${(stopCoords[stopCoords.length-1][0].toString()).slice(0,7)}   
                lng:${(stopCoords[stopCoords.length-1][1].toString()).slice(0,7)}
            `)
        }
    },[stopCoords])


    return(
        <form className="AddRoute-form">
            <RouteNo 
                routeNo={routeNo}
                setRouteNo={setRouteNo}
            />

            <StopName 
                labelName={labelName}
                stopName={stopName}
                setStopName={setStopName}
                handleAddStop={handleAddStop}
            />

            <StopList 
                stops={stops}
                handleRemove={handleRemove}
            />

            <Button 
                handleSubmit={handleSubmit}
            />
        </form>
    )
}

export default Form