import React, { Component } from 'react';
import moment from 'moment';
import './PicturesContainer.css';
import { selectCurrentImage } from '../../actions/getDataAction'
import { connect } from 'react-redux';
import { updateInput } from '../../actions';

const PicturesContainer = (props) => {

    const updateMainImage = (event) => {
      const image = props.previousDays.find(element =>element.id === +event.target.id)
      props.selectCurrentImage(image)
      window.scrollTo({
        top: 100,
        left: 100,
        behavior: 'smooth'
      });
    }

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
                  id={entry.id}
                  onClick={(event)=> updateMainImage(event)}
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


// const mapDispatchToProps = dispatch => ({
//   selectCurrentImage: currentImage => dispatch(selectCurrentImage(currentImage))
// })

export default connect(null, { selectCurrentImage } )(PicturesContainer)
