import React, { Component } from 'react';
import './Form.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateInput } from '../../actions';


export const Form = (props) => {

    const isFormVisible = useSelector(state => state.isFormVisible);
    const dispatch = useDispatch();
    
        return (
            <>
            {isFormVisible &&
            <form 
                // onSubmit={(event) => submitDate(event)}
                className='form-container'>
              <input 
                min='1995-06-16'
                max={props.today.format('YYYY-MM-DD')}
                name='date'
                type='date' 
                onChange={(event) => dispatch(updateInput(event))}
                className='date-input'/>
              <button 
                className="submit-button">
                submit
                </button> 
            </form>

            }
            </>
        )
    }

