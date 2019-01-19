import React from 'react';
import { shallow } from 'enzyme';
import App from 'components/App';
import IdeasList from 'components/IdeasList';
import IdeasAddAndFilter from 'components/IdeasAddAndFilter';


let wrappedComponent;

beforeEach(()=>{
    wrappedComponent = shallow(<App />);
})

it('shows a IdeasList ', () => {
    
    expect(wrappedComponent.find(IdeasList).length).toEqual(1)
});

it('shows a IdeasAddAndFilter ', () => {

    expect(wrappedComponent.find(IdeasAddAndFilter).length).toEqual(1)
});