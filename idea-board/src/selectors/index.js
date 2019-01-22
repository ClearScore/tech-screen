import { createSelector } from 'reselect'
import { SHOW_ALL, BY_DATE, BY_TITLE } from 'actions/types'


const getVisibilityFilter = state => state.visibilityFilter
const getIdeas = state => state.ideas

export const getVisibleTodos = createSelector(
    [getVisibilityFilter, getIdeas],
    (visibilityFilter, ideas) => {
        switch (visibilityFilter) {
            case SHOW_ALL:
                return ideas
            case BY_DATE:
                //CONVERT MY DATE STRING TO MILLISEONDS TIMESTAMP
                const timestamp = new Date()
                return ideas.sort((a,b) => timestamp(b.dateCreated) - timestamp(a.dateCreated))
            case BY_TITLE:
                return ideas.sort((a,b)=>a.title.localeCompare(b.title))
            default:
                throw new Error('Unknown filter: ' + visibilityFilter)
        }
    }
)

