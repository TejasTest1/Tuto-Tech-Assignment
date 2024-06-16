import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

import { useSelector } from 'react-redux'
import '../Styles/Navbar.css'

const Navbar = () => {

  const [toggleNav, setToggleNav] = useState(false);

  const cartLength = useSelector(state => state.cart.data.length)

  const handleToggleNav = () => {
    setToggleNav(!toggleNav)
  }
  return (
    <header>
      <nav className="navbar flex">
        <div className="navBrand">
          <h3>Tudo Shop</h3>
        </div>

        <ul className={toggleNav? "navItems flex toggleItems": "navItems flex "}>
          {
            ['Electronics', 'Sports', 'Home', 'Vehical', 'Books', 'Clothes', 'Bed & Bath', 'Tabletop', 'Furniture', 'New Arrivals']
              .map((currElem, index) => {
                return <li className="navList" key={index}><NavLink to={`/${currElem}`} className='navLink'>{currElem}</NavLink></li>
              })
          }
        </ul>

        <div className="cartNav">
          <NavLink to='/cart' className='cart flex'>
            <FaShoppingCart />
            <h5>{cartLength}</h5>
          </NavLink>
        </div>

        <div className={toggleNav? "hamburgerMenu toggleHam": "hamburgerMenu"} onClick={handleToggleNav}>
          {
            Array.from({length: 3}).map((currElem, index) => {
              return <div className='line' key={index}>{currElem}</div>
            })
          }
        </div>
      </nav>
    </header>
  )
}

export default Navbar
