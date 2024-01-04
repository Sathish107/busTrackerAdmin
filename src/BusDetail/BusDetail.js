import Header from "../AddBus/Header"
import Main from "./Main"
import { useParams } from "react-router-dom"
import './BusDetail.css'

const BusDetail=({buses})=>{
    const {id} =useParams()

    return(
        <>
            <Header />
            <Main 
                buses={buses}
                id={id}
            />
        </>

    )
}

export default BusDetail