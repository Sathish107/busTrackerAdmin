const Main=({buses,id})=>{
    const bus=buses.find((bus)=>{
        return((bus.id).toString()===id)
    })
    return(
        <main className="BusDetail-main">
            <article className="BusDetail-article">
                <h2>{bus.busNo}</h2>
                <ul>
                    <li><span>Route No :</span>{bus.routeNo}</li>
                    <li><span>Start :</span>{bus.start}</li>
                    <li><span>Destination :</span>{bus.destination}</li>
                    <li><span>Bus type :</span>{bus.busType}</li>
                    <li><span>Api key :</span>{bus.apiKey}</li>
                    <li><span>Status :</span>{bus.status}</li>
                </ul>             
            </article>
        </main>
    )
}

export default Main