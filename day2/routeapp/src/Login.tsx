import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
 
type Userdata=
{
    username:string;
     password:string
}
export default function Login() {
    const [userdata,setUserdata]=useState<Userdata>( {})
   
  const navigate=useNavigate();
 
    const handleInput=(evt)=>{
 
    const {name,value} = evt.target
   
      setUserdata(
        {
          ...userdata,
          [name]:value
        }
      )
 
  }
 
  const handleClick=()=>{
    if (userdata.username==="admin" && userdata.password==="pass123")
    {
        sessionStorage.setItem("token","available")
        navigate("/dashboard")
    }
        else
            alert("Invalid username and password")
  }
  return (
    <div>
 
    <label>
     Username
     <input type='text' name="username" value={userdata.username} onChange={handleInput}/>
 
 
 
    </label>
 
    <label>
        Password
        <input type='password' name="password" value={userdata.password} onChange={handleInput}/>
 
    </label>
 
<button onClick={handleClick}>Signin</button>
 
    </div>
  )
}