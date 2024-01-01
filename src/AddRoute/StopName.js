import { FaPlus } from "react-icons/fa"

const StopName=({labelName,stopName,setStopName,handleAddStop})=>{
    return(
        <>
            <label htmlFor="stopName">{labelName}</label>
            <div className="Route-input">

                <input 
                    id="stopName"
                    placeholder="Enter stop name"
                    value={stopName}
                    onChange={(e)=>setStopName(e.target.value)}
                />
                <button type="button" onClick={()=>{handleAddStop()}}>
                    <FaPlus />
                </button>
            </div>
        </>
    )
}

export default StopName