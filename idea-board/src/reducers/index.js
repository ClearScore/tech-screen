import { combineReducers } from 'redux';
import ideasReducer from 'reducers/ideasReducer';

export default combineReducers({
    ideas: ideasReducer
});
