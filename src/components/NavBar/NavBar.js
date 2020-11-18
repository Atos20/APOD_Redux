import React from 'react'
import './NavBar.css'
export const NavBar = () => {
    return (
        <nav className='nav-container'>
          <h1 className="app-title">Nasa Pik of the day</h1>
          <div className="link-container">
              <ul className="link-list">
                  <li className="link">About</li>
                  <li className="link">Last 7 days</li>
                  <li className="link">Lat Month</li>
              </ul>
          </div>
          <button className='find-button'>find</button>
          
        </nav>
    )
}

