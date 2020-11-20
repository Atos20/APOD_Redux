import React from 'react'
import './NavBar.css'

export const NavBar = (props) => {

    return (
        <nav className='nav-container'>
          <h1 className="app-title">NASA Pik of the day</h1>
          <div className="link-container">
              <ul className="link-list">
                  <li className="link">About</li>
                  <li className="link">Favorites</li>
              </ul>
          </div>
          <button 
            onClick={() => props.toggleForm()}
            className='find-button'
            >
            find
            </button>
          
        </nav>
    )
}

