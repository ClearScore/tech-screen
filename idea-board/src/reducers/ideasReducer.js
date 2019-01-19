import {
    ADD_IDEA,
    DELETE_IDEA
} from 'actions/types'

const initialState = [
    {
        id: 0,
        title: 'Add title here...',
        description: 'Write about your idea...',
        dateCreated: new Date()  
    }
]

export default function todos(state = initialState, action) {
    switch (action.type) {
        case ADD_IDEA:
            return [
                ...state,
                {
                    id: state.reduce((maxId, idea) => Math.max(idea.id, maxId), -1) + 1,
                    title: action.payload.title,
                    description: action.payload.description,
                    dateCreated: new Date()
                }
            ]
        case DELETE_IDEA:
            return state.filter(idea =>
                idea.id !== action.payload.id
            )
        default:
            return state
    }
}