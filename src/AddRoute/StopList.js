import { FaTimes } from "react-icons/fa"

const StopList=({stops,handleRemove})=>{
    return(
        <>
            {stops.length?
                <ul className="AddRoute-ul">
                    <li key={stops[stops.length-1].id}>
                        <p>{stops[stops.length-1].stopName}</p>
                        <FaTimes 
                            onClick={()=>handleRemove(stops[stops.length-1].id)}
                        />
                    </li>
                    {
                        (stops.slice(0,stops.length-1).slice().reverse()).map((stop)=>{
                            return(
                                <li key={stop.id}>
                                    <p>{stop.stopName}</p>
                                </li>
                            )
                        })
                    }

                </ul>:<></>
            }
        </>
    )
}

export default StopList