import * as types from 'actions/types'

export const addIdea = () => (
    { 
        type: types.ADD_IDEA, 
        payload: {
            title: 'Add title here...',
            description: 'Write about your idea...'
        }
    }
)
export const deleteIdea = id => (
    { 
        type: types.DELETE_IDEA, 
        payload: id 
    }
)

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

