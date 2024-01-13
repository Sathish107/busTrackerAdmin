import Header from "./Header"
import Main from "./Main"
import './BusList.css'
import { useState,useEffect } from "react"
import { useNavigate } from "react-router-dom"

const BusList=({buses})=>{
    const navigate=useNavigate()
    
    const handleClick=(id)=>{
        navigate(`/bus/${id}`)
    }

    const [search,setSearch]=useState('')
    const [searchResults,setSearchResults]=useState([])

    useEffect(()=>{
        setSearchResults(()=>{
            return(
                buses.filter((bus)=>(bus.busNo).includes(search))
            )
        })
    },[search])
    
    return(
        <>
            <Header 
                search={search}
                setSearch={setSearch}
            />
            <Main
                buses={(searchResults.length)?searchResults:buses}
                handleClick={handleClick}
            />
        </>
    )
}
export default BusList