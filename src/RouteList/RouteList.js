import Header from "./Header"
import Main from "./Main"
import { useState,useEffect} from "react"

const RouteList=({routes})=>{
    const [search,setSearch]=useState('')
    const [searchResults,setSearchResults]=useState([])

    useEffect(()=>{
        setSearchResults(()=>{
            return(
                routes.filter((route)=>(route.routeNo).includes(search))
            )
        })
    },[search])

    return (
        <>
            <Header 
                search={search}
                setSearch={setSearch}
            />
            <Main 
                routes={(searchResults.length)?searchResults:routes}
            />
        </>
    )
}

export default RouteList