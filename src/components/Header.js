import React from 'react'
import '../styles/Image.css'
import '../styles/Header.css'

import thanksgiving from '../assets/thanksgivingimage.png'

import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <div>
      <div>
        <div id="title">
          <h1>HenryBenry's API-Waiter Restaurant</h1>
        </div>

        <div className="nav-bar">

          <Link className="lol1" to="/">Home</Link>

          <Link className="lol2" to="/about-us">About</Link>
        </div>
      </div>

      <div style={{ clear: 'both' }}></div>
    </div>
  )
}

export default Header
