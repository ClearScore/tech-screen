import { combineReducers } from 'redux';
import ideasReducer from 'reducers/ideasReducer';
import visibilityFilter from 'reducers/visibilityFilter'

export default combineReducers({
    ideas: ideasReducer,
    visibilityFilter
});
