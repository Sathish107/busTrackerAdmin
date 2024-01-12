import DetailContainer from './DetailContainer'
import Map from './Map'
import './RouteDetail.css'

const Main=({id,routes,setIsClicked})=>{

    const route=routes.find((route)=>{
        return(id===(route.id).toString())
    })

    return(
        <main className='RouteDetail-main'>
            <Map 
                route={route}
            />
            <DetailContainer
                route={route}
                setIsClicked={setIsClicked}
            />
        </main>
    )
}

export default Main