import React from 'react'
import { Link } from 'react-router-dom'
 
export default function Header() {
  return (
    <div className='clsheader'>
 
         <Link to="/">Home</Link>
              <Link to="/about">About</Link>
              <Link to="/login">SignIn</Link>
    </div>
  )
}