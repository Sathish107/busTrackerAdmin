import Header from "../AddBus/Header"
import Main from "./Main"
import { useState } from "react"
import { useParams ,useNavigate} from "react-router-dom"
import './BusDetail.css'
import DeleteWindow from "./DeleteWindow"

const BusDetail=({buses})=>{
    const {id} =useParams()
    const Navigate=useNavigate()
    const [isClicked,setIsClicked]=useState(false)

    const handleDelete=async ()=>{
        const response=await fetch(`http://localhost:2001/buses/${id}`,{
            "method":"DELETE",
            "headers":{
                "Content-Type":"application/json"
            }
        })
        if(response.ok)Navigate('/buses')
    }

    return(
        <>
            <Header />
            <Main 
                buses={buses}
                id={id}
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

export default BusDetail