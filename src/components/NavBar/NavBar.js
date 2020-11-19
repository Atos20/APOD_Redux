import React from 'react'
import './NavBar.css'
import { toggleForm } from '../../actions';
import { useDispatch } from 'react-redux';

export const NavBar = (props) => {
    const dispatch = useDispatch()
    return (
        <nav className='nav-container'>
          <h1 className="app-title">NASA Pik of the day</h1>
          <div className="link-container">
              <ul className="link-list">
                  <li className="link">About</li>
                  <li className="link">Last 7 days</li>
                  <li className="link">Lat Month</li>
              </ul>
          </div>
          <button 
            onClick={() => dispatch(toggleForm())}
            className='find-button'
            >
            find
            </button>
          
        </nav>
    )
}

