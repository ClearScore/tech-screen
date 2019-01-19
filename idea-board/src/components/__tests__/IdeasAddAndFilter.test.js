import React from 'react';
import { mount } from 'enzyme';
import IdeasAddAndFilter from 'components/IdeasAddAndFilter';

describe('IdeasAddAndFilter component', ()=>{
    

    describe('UI elements in IdeasAddAndFilter', () => {
        let wrappedComponent;
        beforeEach(() => {
            wrappedComponent = mount(<IdeasAddAndFilter />);
        });

        afterEach(() => {
            wrappedComponent.unmount();
        });

        it('has three buttons ', () => {
            expect(wrappedComponent.find('button').length).toEqual(3)
        });
    });

    describe('add-button in IdeasAddAndFilter', ()=>{
        let wrappedComponent;
        beforeEach(() => {
            wrappedComponent = mount(<IdeasAddAndFilter />);
        });

        afterEach(() => {
            wrappedComponent.unmount();
        });
        it('when add-button is pressed onClick event fire with ADD action type', ()=>{

        });
    });
});

