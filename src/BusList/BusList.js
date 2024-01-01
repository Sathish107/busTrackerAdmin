import Header from "./Header"
import Main from "./Main"
import buses from "../data/db"
import './BusList.css'

const BusList=()=>{


    return(
        <>
            <Header />
            <Main
                buses={buses}
            />
        </>
    )
}
export default BusList