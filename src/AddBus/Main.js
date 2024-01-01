import Form from "./Form"
import { useState,useEffect } from "react"

const Main=()=>{
    const [routes,setRoutes]=useState([])

    useEffect(()=>{
        const getRoutes=async ()=>{
            const response=await fetch('http://localhost:2000/routes')
            const foundRoutes=await response.json()
            setRoutes(foundRoutes)
        }
    
        getRoutes()
    },[])    

    return(
        <main className="AddBus-main">
            <Form 
                routes={routes}
            />
        </main>
    )
}

export default Main