import Thead from "./Thead"
import Tbody from "./Tbody"

const Table=({buses,handleClick})=>{
    return(
        <table>
            <Thead />
            <Tbody 
                buses={buses}
                handleClick={handleClick}
            />
        </table>
    )
}

export default Table