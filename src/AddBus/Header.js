import { Link} from 'react-router-dom'

const Header=()=>{
    return (
        <header>
            <nav>
                <h1>Add New Bus</h1>
                <ul className='linkList'>
                    <li>
                        <Link to='/buses' className='Link'>buses</Link>
                    </li>
                    <li>
                        <Link to='/routes' className='Link'>routes</Link>
                    </li>
                </ul>
            </nav>
        </header>
    )
}

export default Header