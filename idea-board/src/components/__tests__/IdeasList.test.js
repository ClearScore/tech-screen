import React from 'react';
import { mount } from 'enzyme';
import IdeasList from 'components/IdeasList';
import IdeaCard from 'components/IdeaCard';
import Root from 'Root';


describe('IdeasList component', () => {

    describe('UI elements in IdeasList', () => {
        let wrappedComponent;
        beforeEach(() => {
            wrappedComponent = mount(
                <Root>
                    <IdeasList />
                </Root>
               );
        });

        afterEach(() => {
            wrappedComponent.unmount();
        });

        it('On first render should show one <li></li> element', () => {
            expect(wrappedComponent.find('li').length).toEqual(1)
        });

        it('On first render should show one <li></li> element', () => {});
    });

});

