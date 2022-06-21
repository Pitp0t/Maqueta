import React from "react";
import {Link} from 'react-router-dom'


export default function Header(){
    
    
    return(
        <header className="header">
            <Link to="/"><h2 className="header--logo">Logo</h2></Link>
            <nav className="header--nav">
                <li> <Link to="/">Home</Link></li>
                <li> <Link to="/registration">Register</Link></li>
                <li> <Link to="/login">Log In</Link></li>
            </nav>
        </header>

    )

}