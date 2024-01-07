import Header from "../AddBus/Header"
import Main from "./Main"
import { useParams } from "react-router-dom"

const RouteDetail=({routes})=>{
    const {id}=useParams()
    return(
        <>
            <Header />
            <Main 
                id={id}
                routes={routes}
            />
        </>

    )
}

export default RouteDetail