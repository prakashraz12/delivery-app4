import React from 'react'
import { useSelector } from "react-redux";
import './Navbar.css'
import { NavLink } from 'react-router-dom'
import reslogo from '../../assets/images/res-logo.png'
const Navbar = () => {
  const item = useSelector((state)=> state.cart)
  
  const NavLinks = [
    {
      path: '/',
      display: 'Home'
    },
    {
      path: 'cart',
      display: 'Cart'
    },
    {
      path: 'about',
      display: 'About'
    },
    {
      path: 'shop',
      display: 'Shop'
    }
  ]
  return (
    <div>
      <nav>
       <NavLink to='/'> <div className="logo">
          <img src={reslogo} alt="" />
          <h2>Open<span>Up</span></h2>
        </div></NavLink>
        <div className="nav__links">
          <ul>
            {
              NavLinks.map((items, index) => (
                <li key={index}><NavLink  className={(navClass) =>
                  navClass.isActive ? "active__menu" : ""
                } to={items.path}>{items.display}</NavLink></li>
              ))
            }
          </ul>
        </div>
        <div className="icons">
          <span className='fav__icon'>
          <i class="ri-heart-line"></i>
          <span className="badge">1</span>
          </span>
         <NavLink to='/cart'> <span className="cart__icon">
          <i class="ri-shopping-bag-2-line"></i>
          <span className="badge">{item.length}</span>
          </span></NavLink>
          <div className="mobile__menu">
          <i class="ri-bar-chart-horizontal-line"></i>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar