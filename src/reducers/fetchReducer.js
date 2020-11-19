
const INITIAL_STATE = {
    pictureOfTheDay : {},
    previousDays: []
}

export const fetchPictureOfTheDayReducer = (state = INITIAL_STATE, action) => {
    console.log('reducer')
    console.log('action', action)
    switch(action.type){
        case 'FETCH_PICTURE_OF_THE_DAY':
            return {
                ...state,
                pictureOfTheDay: action.payload
            }
        default:
            return state
    }
}