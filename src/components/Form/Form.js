import React from 'react';
import { connect } from 'react-redux';
import { fetchPictureByDate } from '../../actions/getDataAction';
import { updateInputField } from '../../actions/';
import './Form.css';


const Form = (props) => {

    const submitDate = (event) => {
        event.preventDefault()
        console.log(props)
        props.fetchPictureByDate(props.updateInput)
    }
        return (
            <>
            {props.isFormVisible &&
            <form 
                onSubmit={(event) => submitDate(event)}
                className='form-container'>
              <input 
                min='1995-06-16'
                max={props.today.format('YYYY-MM-DD')}
                name='date'
                type='date' 
                placeholder={props.today.format('YYYY-MM-DD')}
                onChange={(event) => props.updateInputField(event)}
                className='date-input'/>
              <button 
                onClick={(event) => submitDate(event)}
                className="submit-button">
                submit
                </button> 
            </form>
            }
            </>
        )
    }

const mapStateToProps = state => ({
    updateInput:state.updateInput.date
})

export default connect(mapStateToProps, { updateInputField, fetchPictureByDate })(Form)