import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'
import { FaShoppingCart } from "react-icons/fa";

export default function Navbar() {
  return (
    <>
        <nav className='navbar'>
            <div className='navbar-upper'>
                <ul className='navbar-upper-items'>
                    <li><button>ABOUT US</button></li>
                    <li><button>MY ACCOUNT</button></li>
                    <li><button>CONTACT US</button></li>
                </ul>
            </div>
            <div className='navbar-title'>
                <p>ISOMETRIC ROOM</p>
            </div>
            <ul className='navbar-items'>
                <li>
                    <Link to="/"><button>HOME</button></Link>
                </li>
                <li>
                    <Link to="/catalog"><button>CATALOG</button></Link>
                </li>
                <li>
                <Link to="/showroom"><button>SHOWROOM</button></Link>
                </li>
                <li>
                    <Link to="/Cart"><button>CART <FaShoppingCart /></button></Link>
                </li>
            </ul>
        </nav>
    </>
  )
}
