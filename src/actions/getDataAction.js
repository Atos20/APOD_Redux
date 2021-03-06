import { getPictureOfTheDay, getPicturesOfTheWeek } from '../apiCalls/apiCalls';
import moment from 'moment'

export const fetchPictureOfTheDay = () => async dispatch => {
    const today = moment().format('YYYY-MM-DD')
    try{
        const pictureOfTheDay = await getPictureOfTheDay(today)
        pictureOfTheDay.id = Date.now()
        pictureOfTheDay.isSaved =  false
        return dispatch({
            type: 'FETCH_PICTURE_OF_THE_DAY',
            payload: pictureOfTheDay
        })
    } catch(error){
        console.log(error)
    }
}

export const fetchPreviousPictures = () => async dispatch => {
    const today = moment().format('YYYY-MM-DD');
    const startingDate = moment().subtract(30, 'days').format('YYYY-MM-DD');
    try{
      const lastWeekPictures = await getPicturesOfTheWeek(startingDate, today);
     lastWeekPictures.forEach((entry, i) => {
          entry.id = i
          entry.isSaved = false
          return entry
      })
      return dispatch({
          type: 'FETCH_LAST_WEEKS_PICTURES',
          payload: lastWeekPictures
      })
    }catch(error){
      console.log(error)
    }
}

export const selectCurrentImage = (currentImage) => dispatch => {
    return dispatch({
        type: 'SELECT_CURRENT_IMAGE',
        payload: currentImage
    })
}

export const fetchPictureByDate = (date) => async dispatch => {
    try{
        const pictureOfTheDay = await getPictureOfTheDay(date)
        pictureOfTheDay.id = Date.now()
        pictureOfTheDay.isSaved =  false
        return dispatch({
            type: 'FETCH_PICTURE_BY_DATE',
            payload: pictureOfTheDay
        });
    } catch(error){
        console.log(error)
    }
}