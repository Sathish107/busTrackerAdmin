import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './Login.css'

const Login=({admins})=>{
    const Navigate=useNavigate()
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const handleLogin=(e)=>{
        e.preventDefault()
        const admin=admins.find((admin)=>admin.email===email) 
        
        if(admin && admin.password===password){
            Navigate('/buses')
        }
        setEmail('')
        setPassword('')
    }

    return(
        <main className='Login-main'>
            <div>
                <h2>Admin Login</h2>
                <form className='Login-form' onSubmit={(e)=>handleLogin(e)}>
                    <input
                        type="text"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />
                    <input 
                        type="password"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />
                    <button 
                        className="addButton"
                    >Login</button>
                </form>             
            </div>

        </main>
    )
}

export default Login