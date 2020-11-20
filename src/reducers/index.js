import { isFormVisibleReducer } from './isFormVisible';
import { updateInputReducer } from './updateInput';
import { requestDataReducer } from './dataReducer'
import { combineReducers } from 'redux';

export const allReducers = combineReducers({
    isFormVisible: isFormVisibleReducer,
    updateInput: updateInputReducer,
    data: requestDataReducer
})