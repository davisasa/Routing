import React from 'react'
import {NavLink} from "react-router-dom"

export default function Navbar() {
  return (
    <div style={{backgroundColor: "grey", 
    height: "10vh", 
    display: "flex", 
    alignItems: "center", 
    justifyContent : "space-around"} }>

    <NavLink to={"/"}> HOME</NavLink>
    <NavLink to={"/About"}> ABOUT</NavLink>
    <NavLink to={"/Services"}> SERVICES</NavLink>
    <NavLink to={"/Contact"}> CONTACT</NavLink>

    </div>
  )
}
