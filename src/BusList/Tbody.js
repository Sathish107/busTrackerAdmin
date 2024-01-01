import {GoDotFill} from 'react-icons/go'

const Tbody=({buses})=>{
    return(
        <>
            {
                buses.length && buses.map((bus)=>{
                    return(
                        <tbody>
                            <tr>
                                <td>{bus.busNo}</td>
                                <td>
                                    {(bus.start.length>12)?bus.start.slice(0,12)+'...':bus.start}
                                </td>
                                <td>
                                    {(bus.destination.length>12)?bus.destination.slice(0,12)+'...':bus.destination}
                                </td>
                                <td
                                    style={{
                                        display:'flex',
                                        alignItems:'center',
                                        justifyContent:'center'
                                    }}
                                >   
                                    {(bus.status==='active')?
                                        <GoDotFill style={{color:'green'}}/>:
                                        <GoDotFill style={{color:'red'}}/>
                                    }
                                    {bus.status}
                                </td>
                                <td>
                                    <button className="detailsButton">Details</button>
                                </td>
                            </tr>
                        </tbody>
                    )

                })

            }
        </>
    )
}

export default Tbody