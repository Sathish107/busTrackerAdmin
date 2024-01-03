import { useParams } from "react-router-dom"

const BusDetail=()=>{
    const {id} =useParams()
    console.log(id)
    return(
        <main>
            <h1>Bus Detail of {id}</h1>
        </main>
    )
}

export default BusDetail