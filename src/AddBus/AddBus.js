import Header from "./Header"
import Main from "./Main"
import './AddBus.css'

const AddBus=({routes,setBuses})=>{
    return (
        <>
            <Header />
            <Main 
                routes={routes}
                setBuses={setBuses}
            />
        </>
    )
}

export default AddBus