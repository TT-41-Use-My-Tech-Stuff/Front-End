import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/matt.css'

export default function Navigation(props) {
   
    const { isOpen, onPage, change } = props
    
    const onNavClick = (e) => {
        e.preventDefault() 
        change(e.isOpen, e.isOn)
    }

            return (
                <div>
                    <header id="header">
                        <h1><Link to="index.html">Use My Tech Stuff</Link></h1>
                        <nav id="nav">
                            <ul>
                            <li className="special">
                                <Link to="#menu" className="menuToggle" onClick={onNavClick}><span>Menu</span></Link>
                                <div id="menu">
                                <ul>
                                    <li><Link to="/">Home</Link></li>
                                    <li><Link to="/Generic">Features</Link></li>
                                    <li><Link to="/Elements">Squad Goals</Link></li>
                                    <li><Link to="/SignUp">Sign Up</Link></li>
                                    <li><Link to="/SignIn">Log In</Link></li>
                                </ul>
                                </div>
                            </li>
                            </ul>
                        </nav>
                    </header>
                </div>
            )
        }

