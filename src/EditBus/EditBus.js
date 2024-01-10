import Header from "../AddBus/Header"
import Main from "./Main"
import { useParams } from "react-router-dom"

const EditBus=({buses})=>{
    const {id}=useParams()
    
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

export default EditBus