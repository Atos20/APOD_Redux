const INITIAL_STATE = {
    pictureOfTheDay : {},
    previousPictures: []
}

export const requestDataReducer = (state = INITIAL_STATE, action) => {
    switch(action.type){
        case 'FETCH_PICTURE_OF_THE_DAY':
            return {
                ...state,
                pictureOfTheDay: action.payload
            }
        case 'FETCH_LAST_WEEKS_PICTURES':
            return {
                ...state,
                previousPictures: action.payload
            }
        case 'SELECT_CURRENT_IMAGE':
            return {
                ...state,
                pictureOfTheDay: action.payload
            }
        default:
            return state
    }
}