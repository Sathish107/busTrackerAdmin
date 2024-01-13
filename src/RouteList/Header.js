import {FaSearch} from 'react-icons/fa'
import { Link, useNavigate } from 'react-router-dom'

const Header=({search,setSearch})=>{
    const navigate=useNavigate();
    return (
        <header>
            <nav>
                <h1>Routes</h1>
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
                        required
                        placeholder="search route"
                        type="text"
                        value={search}
                        onChange={(e)=>setSearch(e.target.value)}
                    />
                    <FaSearch />
            </form>
            <button onClick={()=>{navigate('/addRoute')}} className="addButton">Add new route</button>
        </div>

        </header>
    )
}

export default Header