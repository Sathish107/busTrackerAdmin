import {FaTrash} from 'react-icons/fa'
import { MdEdit } from 'react-icons/md'
import './RouteDetail.css'

const Main=({id,routes})=>{
    const route=routes.find((route)=>{
        return(id===(route.id).toString())
    })

    return(
        <main className="BusDetail-main">
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
                                                <li >
                                                    {bus}
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
        </main>
    )
}

export default Main