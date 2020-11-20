export const toggleForm =  () => dispatch => {
    return dispatch({
        type: 'TOGGLE'
    })
}

export const updateInputField = (date) => dispatch => {
    return dispatch({
        type: 'UPDATE_INPUT',
        payload: date
    })
}