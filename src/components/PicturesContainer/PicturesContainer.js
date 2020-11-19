import React from 'react';
import './PicturesContainer.css';
import moment from 'moment';

export const PicturesContainer = (props) => {

    const injectData = () => {
        if(props.previousDays.length === 0) {
          return(
              <h1 className='loading'>Loading...</h1>
              )
        }
          return props.previousDays.map((entry, index) => {
            return (
                <div 
                  className="single-container"
                  key={index}
                  >
                <img
                  onClick={props.updateMainImage}
                  src={entry.url}
                  alt={entry.title}
                  className='image'
                  />
                  <div className="info-container">
                    <p className="image-title">{entry.title}</p>
                    <p className="date">{moment(entry.date).format('LLL')}</p>

                  </div>
                </div>
            )
          });
        }

    return (
        <div className='pictures-container'>
            <div className="title-container">
                <h1 className="pics-title">Previous Days</h1>
            </div>
            <div className="all-images">{injectData()}</div>
        </div>
    )
};
