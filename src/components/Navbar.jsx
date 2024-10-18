import React from 'react'
import './Navbar.css'
import {Link} from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
        <nav className='navbar'>
            <ul className='navbar-items'>
                <li>
                    <Link to="/"><button>Home</button></Link>
                </li>
                <li>
                    <Link to="/catalog"><button>Catalog</button></Link>
                </li>
                <li>
                <Link to="/showroom"><button>Showroom</button></Link>
                </li>
                <li id='cart'>
                    <button>Cart</button>
                </li>
            </ul>
        </nav>
    </div>
  )
}
