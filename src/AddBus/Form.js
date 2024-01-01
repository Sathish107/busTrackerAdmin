import { useState,useEffect } from "react";

const Form=({routes})=>{
    useEffect(()=>{
        console.log(routes)
    },[routes])
    const generateApiKey=()=> {
        const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        const apiKeyLength = 16;
        
        let apiKey = '';
        for (let i = 0; i < apiKeyLength; i++) {
            const randomIndex = Math.floor(Math.random() * characters.length);
            apiKey += characters.charAt(randomIndex);
        }
        
        return apiKey;
    }

    const findRoute=()=>{
        routes.forEach(route => {
            if(route.routeNo===routeNo){
                const stops=route.stops
                setStart(stops[0].stopName)
                setDestination(stops[stops.length-1].stopName)
            }
        })
    }
    
    const [busNo,setbusNo]=useState('')
    const [routeNo,setRouteNo]=useState('')
    const [busType,setBusType]=useState('')
    const [apiKey,setApikey]=useState('')
    const [start,setStart]=useState('')
    const [destination,setDestination]=useState('')

    useEffect(()=>{
        findRoute()
    },[busType])

    const handleClick=()=>{
        setApikey(generateApiKey())
    }

    const handleSubmit=async (e)=>{
        e.preventDefault()


        console.log(start,destination)
        const newBus={
            busNo:busNo,
            routeNo:routeNo,
            busType:busType,
            apiKey:apiKey,
            status:"active",
            start:start,
            destination:destination
        }

        const url=' http://localhost:2001/buses'
        const options={
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newBus)
        }
        const response=await fetch(url,options)

        setbusNo('')
        setRouteNo('')
        setBusType('')
        setApikey('')
    }

    return(
        <form className="AddBus-form" onSubmit={handleSubmit}>
            <label htmlFor="busNo">Bus No</label>
            <input
                autoFocus
                id="busNo"
                placeholder="Enter bus no"
                required
                value={busNo}
                onChange={(e)=>setbusNo(e.target.value)}
            />

            <label htmlFor="routeNo">Route No</label>
            <input
                id="routeNo"
                placeholder="Enter valid route"
                value={routeNo}
                onChange={(e)=>setRouteNo(e.target.value)}
            />

            <label htmlFor="busType">Bus Type</label>
            <input 
                id="busType"
                placeholder="Enter bus type"
                value={busType}
                onChange={(e)=>setBusType(e.target.value)}
            />

            <label htmlFor='apiKey'>Api Key</label>
            <input 
                id='apiKey'
                readOnly
                required
                placeholder="Api key"
                value={apiKey}
            />

            <button 
                type="submit" 
                className="addButton"
            >Submit</button>

            <button 
                type="button"
                onClick={()=>handleClick()}
                className='addButton' 
                style={{
                    backgroundColor:"green",
                    marginLeft:"1em"
                }}
            >Generate Api Key</button>
        </form>
    )
}

export default Form