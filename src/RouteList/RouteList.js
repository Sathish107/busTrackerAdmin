import Header from "./Header"
import Main from "./Main"

const RouteList=({routes})=>{
    return (
        <>
            <Header />
            <Main 
                routes={routes}
            />
        </>
    )
}

export default RouteList