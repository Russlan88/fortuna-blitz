import React from 'react'
import { NavLink } from 'react-router-dom'

function Header() {
    return (
        <div className="hader">
            <NavLink to="/" exact activeStyle={{fontWeight: "bold", color: "red"}}>
                Home
            </NavLink>
            <NavLink to="/products" exact activeStyle={{fontWeight: "bold", color: "red"}}>
                Products
            </NavLink>
            <NavLink to="/contacts" exact activeStyle={{fontWeight: "bold", color: "red"}}>
                Contact Us
            </NavLink>
        </div>
    )
}

export default Header
