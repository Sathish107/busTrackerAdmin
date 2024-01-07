import { useNavigate } from "react-router-dom"

const Tbody =({routes})=>{
    const Navigate=useNavigate()
    const handleClick=(id)=>{
        Navigate(`/route/${id}`)
    }

    return(
        <tbody>
            {
                routes.map((route)=>{
                    return(
                        <tr key={route.id}>
                            <td>{route.routeNo}</td>
                            <td>{route.start}</td>
                            <td>{route.destination}</td>
                            <td>{route.travelTime}</td>
                            <td>
                                <button 
                                    className="detailsButton"
                                    onClick={()=>handleClick(route.id)}
                                >Details</button>
                            </td>

                        </tr>

                    )
                })
            }

        </tbody>
    )
}

export default Tbody