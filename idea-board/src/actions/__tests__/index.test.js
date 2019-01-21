import * as actions from 'actions';
import * as types from 'actions/types';

describe('--actions--',()=>{
    describe('addIdea()', ()=>{
        const initialValues = { 
            title: 'Add title here...', 
            description: 'Write about your idea...' 
        }
        const action = actions.addIdea(initialValues);
       
        it('has the correct type',()=>{ 
            expect(action.type).toEqual(types.ADD_IDEA)
        })
        it('has the correct payload', ()=>{
            expect(action.payload).toEqual(initialValues)
        })
    })
    describe('editIdea()', ()=>{
         const action = actions.editIdea( {
                    id:0, 
                    title:'Hello title test',
                    description:'Hello 140 chars'
                });

        it('has the correct type',()=>{
            expect(action.type).toEqual(types.EDIT_IDEA)
        })
        it('has the correct payload', ()=>{
            expect(action).toEqual({
                    type: types.EDIT_IDEA,
                    payload : {
                        id: 0,
                        title:'Hello title test',
                        description:'Hello 140 chars'
                    }
            })
        
        });
   
    });

})
