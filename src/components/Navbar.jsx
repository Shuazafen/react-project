import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div style={{display:'flex' ,justifyContent:'space-around', backgroundColor:'grey'}}>
      <Link to="/">Home</Link>      
      <Link to="/Contact">Contact</Link>
      <Link to="/Service">Service</Link>
      <Link to="/About">About</Link>

    </div>
  )
}

export default Navbar
