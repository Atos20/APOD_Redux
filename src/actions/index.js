export const toggleForm =  () => {
    return {
        type: 'TOGGLE'
    }
}

export const updateInput = (event) => {
    return {
        type: 'UPDATE_INPUT',
        payload: event
    }
}