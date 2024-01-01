import Thead from "./Thead"
import Tbody from "./Tbody"

const Table=({buses})=>{
    return(
        <table>
            <Thead />
            <Tbody buses={buses}/>
        </table>
    )
}

export default Table