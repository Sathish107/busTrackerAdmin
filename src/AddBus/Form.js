import { useState,useEffect } from "react";

const Form=({routes})=>{
    
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

    const [busNo,setbusNo]=useState('')
    const [routeNo,setRouteNo]=useState('')
    const [busType,setBusType]=useState('')
    const [apiKey,setApikey]=useState('')
    const [start,setStart]=useState('')
    const [destination,setDestination]=useState('')
    const [routeId,setRouteId]=useState(null)
    const [busList,setBusList]=useState([])

    useEffect(()=>{
        console.log(busList)
    },[busList])

    const findRoute=()=>{
        routes.forEach(route => {
            if(route.routeNo===routeNo){
                setStart(route.start)
                setDestination(route.destination)
                setRouteId(route.id)
                setBusList(route.buses)
                return
                
            }else{
                setStart('')
                setDestination('')
                setRouteId('')
                setBusList([])                
            }
        })
    }

    useEffect(()=>{
        findRoute()
    },[routeNo])

    const handleSubmit=async (e)=>{
        e.preventDefault()

        const response=await fetch('http://localhost:2001/buses')
        const busesFound=await response.json()
        const id =busesFound.length+1

        const newBus={
            id:id,
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
        await fetch(url,options)

        setBusList(async (previousBusList)=>{
            await fetch(`http://localhost:2000/routes/${routeId}`,{
                method:"PATCH",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({buses:[...previousBusList,busNo]})
            })
            routes[0].buses=[...previousBusList,busNo]
            
            return([...previousBusList,busNo])
        })


        setRouteId(null)
        setBusList([])

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
                onChange={ (e)=>setRouteNo(e.target.value)}
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
                onClick={()=>{
                    setApikey(generateApiKey())
                }}
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