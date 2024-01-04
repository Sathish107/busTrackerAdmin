import Header from "./Header"
import Main from "./Main"
import './BusList.css'
import { useNavigate } from "react-router-dom"

const BusList=({buses})=>{
    const navigate=useNavigate()
    
    const handleClick=(id)=>{
        navigate(`/bus/${id}`)
    }

    return(
        <>
            <Header />
            <Main
                buses={buses}
                handleClick={handleClick}
            />
        </>
    )
}
export default BusList