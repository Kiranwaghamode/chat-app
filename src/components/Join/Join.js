import React, { useState } from 'react'
import './join.css'
import logo from '../../images/logo.png'
import { Link } from 'react-router-dom'

let user;

export const Join = () => {
    const [name, setname] = useState("")
 
    

    const sendUser = ()=>{
        user = document.getElementById('joinInput').value;
        document.getElementById('joinInput').value= "";
    }


  return (
    <>
    <div className="container">
        <div className="login-page">
            <img src={logo} alt="" />
            <h1>CHAT BOT</h1>
            <input placeholder='Enter your Name' type="text"  id='joinInput' onChange={(e)=> setname(e.target.value)}/>
            <Link onClick={(event)=> !name? event.preventDefault(): null} to='/chat' ><button onClick={sendUser}>Login</button></Link>

        </div>
    </div>
    
    </>
  )
}


export {user}