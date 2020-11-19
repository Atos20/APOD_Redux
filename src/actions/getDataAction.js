import { getPictureOfTheDay, getPicturesOfTheWeek } from '../apiCalls/apiCalls';
import moment from 'moment'

export const fetchPictureOfTheDay = async() => async dispatch => {
    console.log('fetching')
    const today = moment().format('YYYY-MM-DD')
    const pictureOfTheDay = await getPictureOfTheDay(today)
    console.log(pictureOfTheDay)
    await dispatch({
        type: 'FETCH_PICTURE_OF_THE_DAY',
        payload: pictureOfTheDay
    })
 
}