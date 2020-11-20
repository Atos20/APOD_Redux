const INITIAL_STATE = {
    date : ''
} 

export const updateInputReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case 'UPDATE_INPUT':
        return { ...state, [action.payload.target.name]: action.payload.target.value };
      default:
        return state;
    };
  };