import * as types from 'actions/types'

export const addIdea = (initialValues) => (
    { 
        type: types.ADD_IDEA, 
        payload: initialValues
    }
)
export const deleteIdea = id => {
    console.log('ACTION ==' + id)
    return {
        type: types.DELETE_IDEA,
            payload: id
    }
}
   


export const editIdea = ({id, title, description}) => (
    { 
        type: types.EDIT_IDEA, 
        payload: {
           id,
           title,
           description  
        }
    }
)

export const setVisibilityFilter = filter => ({ type: types.SET_VISIBILITY_FILTER, filter })

