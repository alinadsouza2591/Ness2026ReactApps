import React from 'react'
import { Link } from 'react-router-dom'
import "./header.css"
 
export default function Header() {
  return (
    <div id='clsheader'>
 
              <Link to="/about">About</Link>
              <Link to="/login">SignIn</Link>
    </div>
  )
}