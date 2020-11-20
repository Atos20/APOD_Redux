export const toggleForm =  () => dispatch => {
    return dispatch({
        type: 'TOGGLE'
    })
}

export const updateInput = (event) => dispatch => {
    return dispatch({
        type: 'UPDATE_INPUT',
        payload: event
    })
}