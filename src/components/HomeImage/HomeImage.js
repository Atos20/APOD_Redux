import React from 'react'
import './HomeImage.css'
import moment from 'moment'
export const HomeImage = (props) => {
    const { pictureOfTheDay } = props

    return (
        <div className='container'>
            <h1 className="picture-title">{pictureOfTheDay.title}</h1>
            <div className="date-container">
                <h3 className="date-title">taken on</h3>
                <p className="date-title">{moment(pictureOfTheDay.date).format('LLL')}</p>
            </div>
            <img 
              src={pictureOfTheDay.url} 
              alt={pictureOfTheDay.title} 
              className="todays-image"/>
              <div className="description-container">
                  <h2 className="description-title">description</h2>
                  <p className="description">{pictureOfTheDay.explanation}</p>
              </div>

        </div>
    )
}
