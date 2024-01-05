import {FaTrash,} from 'react-icons/fa'
import {MdEdit} from 'react-icons/md'

const Main=({buses,id})=>{
    const bus=buses.find((bus)=>{
        return((bus.id).toString()===id)
    })
    return(
        <main className="BusDetail-main">
            <div className="BusDetail-container">
                <div>
                    <h2>{bus.busNo}</h2>
                    <MdEdit />
                    <FaTrash />
                </div>
                <table>
                    <tbody>
                        <tr>
                            <td>Route No </td>
                            <td>{bus.routeNo}</td>
                        </tr>
                        <tr>
                            <td>Start </td>
                            <td>{bus.start}</td>
                        </tr>
                        <tr>
                            <td>Destination </td>
                            <td>{bus.destination}</td>
                        </tr>
                        <tr>
                            <td>Bus type </td>
                            <td>{bus.busType}</td>
                        </tr>
                        <tr>
                            <td>Api key</td>
                            <td>{bus.apiKey}</td>
                        </tr>
                        <tr>
                            <td>Status :</td>
                            <td>{bus.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            {/* <h2>{bus.busNo}</h2>
            <ul>
                <li><span>Route No :</span>{bus.routeNo}</li>
                <li><span>Start :</span>{bus.start}</li>
                <li><span>Destination :</span>{bus.destination}</li>
                <li><span>Bus type :</span>{bus.busType}</li>
                <li><span>Api key :</span>{bus.apiKey}</li>
                <li><span>Status :</span>{bus.status}</li>
            </ul> */}
        </main>
    )
}

export default Main