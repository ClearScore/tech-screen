import React from 'react';
import { mount } from 'enzyme';
import IdeasAddAndFilter from 'components/IdeasAddAndFilter';
import IdeasList from 'components/IdeasList';
import Root from 'Root'


describe('IdeasAddAndFilter component', ()=>{
    

    describe('UI elements in IdeasAddAndFilter', () => {
        let wrappedComponent;
        beforeEach(() => {
            wrappedComponent = mount(
            <Root>
                <IdeasAddAndFilter />
            </Root>);
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
            wrappedComponent = mount(
                <Root>
                    <IdeasAddAndFilter />
                    <IdeasList />
                </Root>
            );
        });

        afterEach(() => {
            wrappedComponent.unmount();
        });
        it('when add-button is pressed onClick event fire with ADD action type', ()=>{
            expect(wrappedComponent.find('button.add-button').length).toEqual(1)
            wrappedComponent.find('button.add-button').simulate('click')
            expect(wrappedComponent.find('li').length).toEqual(2)
        });
    });
});

