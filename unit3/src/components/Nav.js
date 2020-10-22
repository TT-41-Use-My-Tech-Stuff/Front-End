import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export default function Nav(props) {
   
   

 
    
    // useEffect(() => {

        const onClick = (e) => toggleOpen(!isOpen)
        isOpen ? e.target.classList = '' : e.target.classList = 'menuToggle'

    // })
   



        
           
            return (
                <div>
                    <header id="header">
                        <h1><Link to="index.html">Use My Tech Stuff</Link></h1>
                        <nav id="nav">
                            <ul>
                            <li className="special">
                                <Link to="#menu" className="menuToggle" onClick={onClick}><span>Menu</span></Link>
                                <div id="menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/generic">Features</Link></li>
                                    <li><Link to="/elements">Squad Goals</Link></li>
                                    <li><Link to="/signup">Sign Up</Link></li>
                                    <li><Link to="/signin">Log In</Link></li>
                                </ul>
                                </div>
                            </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            )
        }

