import React from 'react';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import reducers from 'reducers'
import throttle from 'lodash/throttle'
import { loadState, saveState } from 'localStorage'


const persistedState = loadState()

const store = createStore(
    reducers,
    persistedState,
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()
)

/*throttle idea comes from egghead.io redux tutorial - persistState part
it is added for optimisation purposes, that way it wont write every re-render 
, but only once as needed, as throttle give 1 sec pouse (can try 500ms too)
*/
store.subscribe(throttle(() => {
    return saveState(store.getState())
}),1000)

export default (props) => {

    return (
        <Provider store={store}>
            {props.children}
        </Provider>
    )
}