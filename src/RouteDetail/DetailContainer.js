import {FaTrash} from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'

const DetailContainer=({route})=>{
    return(
        <div className='RouteDetail-container'>
            <div className="BusDetail-container">
                <div>
                    <h2>{route.routeNo}</h2>
                    <MdEdit />
                    <FaTrash />
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>Start </td>
                            <td>{route.start}</td>
                        </tr>
                        <tr>
                            <td>Destination </td>
                            <td>{route.destination}</td>
                        </tr>
                        <tr>
                            <td>Stops</td>
                            <td >
                                <ul className='RouteDetails-list'>
                                    {
                                        route.stops.map((stop)=>{
                                            return(
                                                <li key={stop.id}>
                                                    {stop.stopName}
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </td>
                        </tr>
                        <tr>
                            <td>Buses</td>
                            <td >
                                <ul className='RouteDetails-list'>
                                    {
                                        route.buses.map((bus)=>{
                                            return(
                                                <li key={bus.id}>
                                                    <p>{bus.busNo}</p>
                                                    <button 
                                                        className='detailsButton'
                                                    >Details</button>
                                                </li>
                                            )
                                        })
                                    }
                                </ul>
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
        
    )
}

export default DetailContainer