import Header from "./Header"
import Main from "./Main"
// import buses from "../data/db"
import './BusList.css'
import { useEffect,useState } from "react"

const BusList=()=>{
    const [buses,setBuses]=useState([])

    useEffect(()=>{
        const fetchData=async ()=>{
            const response=await fetch('http://localhost:2001/buses')
            const jsonData=await response.json()
            setBuses(jsonData)
            console.log(jsonData[0].id)
        }

        fetchData()

    },[])
    

    return(
        <>
            <Header />
            <Main
                buses={buses}
            />
        </>
    )
}
export default BusList