import { ArrowDropDown, Notifications, Search } from '@material-ui/icons'
import React, { useState } from 'react'
import Img from "../../img/Netflix-logo.png"

import './navbar.scss';
import User from "../../img/user.png"


const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    window.onscroll = () =>{
        setIsScrolled(window.pageYOffset === 0 ? false : true);
        return () => (window.onscroll = null);
    };

    return (
        <div class={isScrolled ? "navbar scrolled" : "navbar" }>
            <div className="container">
                <div className="left">
                    <img src={Img} alt="" />
                    <span><a href="/">Home</a> </span>
                    <span><a href="/watch">View Video</a></span>
                    <span><a href="/Register">Register</a></span>
                    <span><a href="/Login">Login</a></span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icons" />
                    
                    <Notifications className="icons" />
                    <img src={User} alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icons" />
                        <div className="options">
                            <span>Settings</span>
                            <span>Logout</span>
                        </div>
                    </div>
                    
                </div>
            </div>
            
        </div>
    )
}

export default Navbar
