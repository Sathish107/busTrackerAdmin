import {FaSearch} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Header=()=>{
    const navigate=useNavigate();
    return (
        <header>
            <nav>
                <h1>BUS DETAILS</h1>
                <ul className='linkList'>
                    <li>
                        <Link to='/buses' className='Link'>buses</Link>
                    </li>
                    <li>
                        <Link to='/routes' className='Link'>routes</Link>
                    </li>
                </ul>
            </nav>

        <div className="busList-search">
            <form className='busList-form'>
                    <input
                        className='busList-input'
                        autoFocus
                        placeholder="search bus"
                        type="text"
                    />
                    <FaSearch />
            </form>
            <button onClick={()=>{navigate('/addBus')}} className="addButton">Add new bus</button>
        </div>

        </header>
    )
}

export default Header