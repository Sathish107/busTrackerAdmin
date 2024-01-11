import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Form=({buses,id})=>{
    const Navigate=useNavigate()

    const bus=buses.find((bus)=>{
        return((bus.id).toString()===id)
    })

    const [busNo,setbusNo]=useState('')
    const [routeNo,setRouteNo]=useState('')
    const [busType,setBusType]=useState('')
    const [apiKey,setApikey]=useState('')

    useEffect(()=>{
        setbusNo(bus.busNo)
        setRouteNo(bus.routeNo)
        setBusType(bus.busType)
        setApikey(bus.apiKey) 
    },[])

    const handleSubmit=async (e)=>{
        e.preventDefault()

        const newBus={
            id:id,
            busNo:busNo,
            routeNo:routeNo,
            busType:busType,
            apiKey:apiKey,
            status:"active",
            start:bus.start,
            destination:bus.destination
        }

        const url=`http://localhost:2001/buses/${id}`
        const options={
            method:"PUT",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newBus)
        }
        const response=await fetch(url,options)

        if(response.ok){
            
            Navigate('/buses')
        }
    }

    return(
        <form className="AddBus-form" onSubmit={handleSubmit}>
            <label htmlFor="busNo">Bus No</label>
            <input
                readOnly
                id="busNo"
                placeholder="Enter bus no"
                required
                value={busNo}
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
            >Save</button>

        </form>
    )
}

export default Form