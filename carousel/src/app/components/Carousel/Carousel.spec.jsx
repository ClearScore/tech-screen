import * as React from 'react';
import Carousel from './Carousel';
import { shallow } from 'enzyme';

let wrapper = null;

beforeEach(() => {
  wrapper = shallow(<Carousel slides={[<div>asd</div>, <div>hfd</div>]}/>)
})

describe('Carousel', () => {
  it('Renders without crashing', () => {
    expect(wrapper).toHaveLength(1);
  });
  it('Increases slide index properly', () => {
    const carousel = wrapper.instance();
    carousel.setState = jest.fn();
    carousel.nextSlide()
    expect(carousel.setState).toHaveBeenCalledWith({currentSlideIndex: 1});
  });
});