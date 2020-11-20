import React from 'react';
import './Form.css';


export const Form = (props) => {
    console.log(props)
        return (
            <>
            {props.isFormVisible &&
            <form 
                // onSubmit={(event) => submitDate(event)}
                className='form-container'>
              <input 
                min='1995-06-16'
                max={props.today.format('YYYY-MM-DD')}
                name='date'
                type='date' 
                placeholder={props.today.format('YYYY-MM-DD')}
                onChange={(event) => props.updateInput(event)}
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

