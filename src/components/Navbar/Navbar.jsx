import React, { useContext, useState } from 'react'

import './Navbar.css'
import {assets} from '../../assets/assets'
import { Link } from 'react-router-dom';
import { StoreContext } from '../../context/StoreContext';

const Navbar = ({setShowLogin}) => {

    const [menu, setState] = useState("Home");

    const {getTotalCartAmount} = useContext(StoreContext)

  return (
    <div className='navbar'>
        <Link to='/' onClick={()=>setState("Home")}><img src={assets.logo} alt="" className='logo' /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setState("Home")} className={menu === "Home"?"active":""}>Home</Link>
            <a href='#explore-menu' onClick={()=>setState("Menu")} className={menu === "Menu"?"active":""}>Menu</a>
            <a href='#app-download' onClick={()=>setState("Mobile-App")} className={menu === "Mobile-App"?"active":""}>Mobile-App</a>
            <a href='#footer' onClick={()=>setState("Contact Us")} className={menu === "Contact Us"?"active":""}>Contact Us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt="search" />
            <div className="navbar-search-icon">
                <Link to='/cart'><img src={assets.basket_icon} alt="basket" /></Link>
                <div className={getTotalCartAmount()===0?"":"dot"}></div>
            </div>
            <button onClick={()=>setShowLogin(true)}>sign in</button>
        </div>
    </div>
  )
}

export default Navbar
