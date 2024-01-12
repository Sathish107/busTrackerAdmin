import Header from "../AddBus/Header"
import Main from "./Main"
import DeleteWindow from '../BusDetail/DeleteWindow'
import { useState } from "react"
import { useParams ,useNavigate} from "react-router-dom"

const RouteDetail=({routes})=>{
    const {id}=useParams()
    const Navigate=useNavigate()
    const [isClicked,setIsClicked]=useState(false)

    const handleDelete=async ()=>{
        const response=await fetch(`http://localhost:2000/routes/${id}`,{
            "method":"DELETE",
            "headers":{
                "Content-Type":"application/json"
            }
        })
        if(response.ok)Navigate('/routes')
    }
    return(
        <>
            <Header />
            <Main 
                id={id}
                routes={routes}
                setIsClicked={setIsClicked}
            />
            {
                isClicked&&<DeleteWindow 
                    setIsClicked={setIsClicked}
                    handleDelete={handleDelete}
                />
            }
        </>

    )
}

export default RouteDetail