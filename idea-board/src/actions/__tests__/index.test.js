import { addIdea } from 'actions';
import { ADD_IDEA } from 'actions/types';

describe('--actions--',()=>{
    describe('addIdea()', ()=>{
        it('has the correct type',()=>{
            const action = addIdea();
            expect(action.type).toEqual(ADD_IDEA)
        })
        it('has the correct payload', ()=>{
            const initialValues = { title: 'Add title here...', description: 'Write about your idea...' }
            const action = addIdea(initialValues)
            expect(action.payload).toEqual(initialValues)
        })
    })
})
