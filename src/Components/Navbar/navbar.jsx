import React from 'react'
import { FiSearch } from 'react-icons/fi'
import { FaFacebook, FaTwitter } from 'react-icons/fa'
import './navbar.css'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <ul className='navbar-left'>
            <li className="navbar-element"> <a href="#" className='nav-item'>Inicio </a></li>
            <li className="navbar-element"> <a href="#" className='nav-item'>Podcast </a></li>
            <li className="navbar-element"> <a href="#" className='nav-item'>Proyectos </a></li> 
            <li className="navbar-element"> <a href="#" className='nav-item'>Galería</a></li>
            <li className="navbar-element nav-dropdown"> <a href="#" className='nav-dropdown'>Más ▼</a>
            <ul className='dropdown-content'>
                <li className='dropdown-element'><a className='dropdown-item' href="#">Item 1 </a></li>
                <li className='dropdown-element'><a className='dropdown-item' href="#">Item 2</a></li>
            </ul>
            </li>
        </ul>
    <div className='navbar-right'>
        <div className='search-box'>
            <FiSearch/>
            <input type="text" placeholder='Buscar' />
        </div>
        <FaFacebook  size={24} className='navbar-icon'/>
        <FaTwitter size={24} className='navbar-icon'/>

        </div>    
    </nav>
  )
}

export default Navbar