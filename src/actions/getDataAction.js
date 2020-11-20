import { getPictureOfTheDay, getPicturesOfTheWeek } from '../apiCalls/apiCalls';
import moment from 'moment'

export const fetchPictureOfTheDay = () => async dispatch => {
    const today = moment().format('YYYY-MM-DD')
    const pictureOfTheDay = await getPictureOfTheDay(today)
    return dispatch({
        type: 'FETCH_PICTURE_OF_THE_DAY',
        payload: pictureOfTheDay
    })
 
}
export const fetchPreviousPictures = () => async dispatch => {
    const today = moment().format('YYYY-MM-DD');
    const startingDate = moment().subtract(17, 'days').format('YYYY-MM-DD');
    try{
      const lastWeekPictures = await getPicturesOfTheWeek(startingDate, today);
      return dispatch({
          type: 'FETCH_LAST_WEEKS_PICTURES',
          payload: lastWeekPictures
      })
    }catch(error){
      console.log(error)
    }
 
}
