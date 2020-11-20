import React from 'react'
import './HomeImage.css'
import moment from 'moment'
import ReactPlayer from 'react-player'
export const HomeImage = (props) => {
    const { pictureOfTheDay } = props

    return (
        <div className='container'>
            <h1 className="picture-title">{pictureOfTheDay.title}</h1>
            <div className="date-container">
                <h3 className="date-title">taken on</h3>
                <p className="date-title">{moment(pictureOfTheDay.date).format('LLL')}</p>
            </div>
            {pictureOfTheDay.media_type === 'image' ? <img
                  id={pictureOfTheDay.id}
                  src={pictureOfTheDay.url}
                  alt={pictureOfTheDay.title}
                  className='todays-image'
                  /> : 
                  <ReactPlayer
                  url={pictureOfTheDay.url}
                  alt={pictureOfTheDay.title}
                  controls={true}
                  width={550}
                  height={450}
                  config={{
                    youtube: {
                      playerVars: { showinfo: 1 }
                    }
                  }}
                />}
              <div className="description-container">
                  <h2 className="description-title">description</h2>
                  <p className="description">{pictureOfTheDay.explanation}</p>
              </div>

        </div>
    )
}
