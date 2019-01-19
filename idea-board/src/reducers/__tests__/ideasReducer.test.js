import ideasReducer from 'reducers/ideasReducer';
import * as types from 'actions/types'


describe('--reducers--',()=>{
    describe('ideasReducer', () => {

        /*
            https://github.com/facebook/jest/issues/2234
            Stubbing new Date()
        */
        let currentDate;

        beforeEach(() => {
            currentDate = new Date();

            const RealDate = Date;
            global.Date = jest.fn(() => new RealDate(currentDate.toISOString()));
            Object.assign(Date, RealDate);
        });

        it('handles actions of type ADD_IDEA', () => {
            const action = {
                type: types.ADD_IDEA,
                payload: {
                    title: 'Test title',
                    description: 'Text max 140 chars'
                }
            }
            const newState = ideasReducer([], action);
            expect(newState).toEqual([

                {
                    id: 0,
                    title: 'Test title',
                    description: 'Text max 140 chars',
                    dateCreated: currentDate
                }
            ]);
        });
    });
});

