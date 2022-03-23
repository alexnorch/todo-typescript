import React from 'react'
import { Link } from 'react-router-dom'

export const Navbar: React.FC = () => {
  return (
    <nav>
    <div className="nav-wrapper purple darken-2 px1">
      <a href="/" className="brand-logo">React + TypeScript</a>
      <ul id="nav-mobile" className="right hide-on-med-and-down">
        <li><Link to='/'>Cписок дел</Link></li>
        <li><Link to='/about'>Информация</Link></li>
      </ul>
    </div>
  </nav>
  )
}
