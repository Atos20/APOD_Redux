import { isFormVisibleReducer } from './isFormVisible';
import { updateInputReducer } from './updateInput';
import {fetchPictureOfTheDayReducer } from './fetchReducer'
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    isFormVisible: isFormVisibleReducer,
    updateInput: updateInputReducer,
    data: fetchPictureOfTheDayReducer
})