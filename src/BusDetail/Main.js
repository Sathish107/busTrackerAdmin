import {FaTrash,} from 'react-icons/fa'
import {MdEdit} from 'react-icons/md'
import { useNavigate } from 'react-router-dom'

const Main=({buses,id,setIsClicked})=>{
    const Navigate=useNavigate()
    const handleEdit=((id)=>{
        console.log(id)
        Navigate(`/editbus/${id}`)
    })

    const bus=buses.find((bus)=>{
        return((bus.id).toString()===id)
    })
    return(
        <main className="BusDetail-main">
            <div className="BusDetail-container">
                <div>
                    <h2>{bus.busNo}</h2>
                    <MdEdit 
                        onClick={()=>handleEdit(id)}
                    />
                    <FaTrash 
                        onClick={()=>setIsClicked(true)}
                    />
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
                            <td>Status </td>
                            <td>{bus.status}</td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </main>
    )
}

export default Main