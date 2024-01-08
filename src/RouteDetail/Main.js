import DetailContainer from './DetailContainer'
import Map from './Map'
import './RouteDetail.css'

const Main=({id,routes})=>{

    const route=routes.find((route)=>{
        return(id===(route.id).toString())
    })

    return(
        <main className='RouteDetail-main'>
            <Map route={route}/>
            <DetailContainer route={route}/>
        </main>
    )
}

export default Main