const Tbody =({routes})=>{
    return(
        <tbody>
            {
                routes.map((route)=>{
                    return(
                        <tr>
                            <td>{route.routeNo}</td>
                            <td>{route.start}</td>
                            <td>{route.destination}</td>
                            <td>{route.travelTime}</td>
                            <td>
                                <button 
                                    className="detailsButton"
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