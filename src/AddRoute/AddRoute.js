import Header from "../AddBus/Header"
import Main from "./Main"
import './AddRoute.css'

const AddRoute=({setRoutes})=>{
    return(
        <>
            <Header />
            <Main 
                setRoutesMain={setRoutes}
            />
        </>
    )
}

export default AddRoute