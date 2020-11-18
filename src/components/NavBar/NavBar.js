import React from 'react'
import './NavBar.css'
export const NavBar = () => {
    return (
        <nav className='nav-container'>
          <div className="link-container">
              <ul className="link-list">
                  <li className="link">About</li>
                  <li className="link">Developing Process</li>
                  <li className="link">Find Picture</li>
              </ul>
          </div>
          <h1 className="app-title">Nasa Pik of the day</h1>
        </nav>
    )
}

