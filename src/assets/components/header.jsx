import React from 'react'
import { Link, NavLink } from 'react-router-dom';

export default function header() {
  return (
      <header className=''>
          <div>
              logo
          </div>
         <nav className=''>
            <div className=""></div>
               <ul className=''>
                  <li id='' className=''>
                     <NavLink className='' to="/">Home</NavLink>
                  </li>
                  <li id='' className=''>
                      <a href='#menu'>Menu</a>
                  </li>
                  <li id='' className=''>
                      <a href='#about'>About</a>
                  </li>
                  <li id='' className=''>
                     <NavLink className='' to="/reservation">Reservations</NavLink>
                  </li>
                  <li id='' className=''>
                      <a href='#order_online'>Order Online</a>
                  </li>
                  <li id='' className=''>
                      <a href=''>Sign Up</a>
                  </li>
               </ul>
         </nav>
     </header>
  )
}
