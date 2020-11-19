import React, { Component } from 'react';
import './Form.css';
import moment from 'moment';

export class Form extends Component {
    constructor(props){
        super()

        this.state = {
          date: moment().format('YYYY-MM-DD'),
        }
    }

    updateValue = (event) => {
        this.setState({[event.target.name] : event.target.value})
    }

    submitDate = (event) => {
        event.preventDefault()
        console.log(this.state.date)
    }

    render() {
        const { date } = this.state
        const { today, isFormVisible } = this.props

        return (
            <>
            {isFormVisible &&
            <form 
                onSubmit={(event) => this.submitDate(event)}
                className='form-container'>
              <input 
                min='1995-06-16'
                max={today.format('YYYY-MM-DD')}
                name='date'
                type='date' 
                value={date}
                onChange={(event) => this.updateValue(event)}
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
}
