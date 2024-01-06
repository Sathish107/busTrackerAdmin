import Thead from "./Thead"
import Tbody from "./Tbody"

const Table =({routes})=>{
    return(
        <table className="BusList-table">
            <Thead />
            <Tbody 
                routes={routes}
            />
        </table>
    )
}

export default Table