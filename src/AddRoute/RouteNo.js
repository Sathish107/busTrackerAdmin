const RouteNo=({routeNo,setRouteNo})=>{
    return(
        <>
            <label htmlFor="routeNo">Route No</label>
            <input 
                id="routeNo"
                placeholder="Enter route no"
                required
                value={routeNo}
                onChange={(e)=>setRouteNo(e.target.value)}
            />
        </>
    )
}

export default RouteNo