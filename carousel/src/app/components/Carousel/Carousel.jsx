import React from 'react';
import PropTypes from 'prop-types';

import bemHelper from '../../utils/bem';
import './carousel.scss';

const cn = bemHelper({ block: 'carousel' });

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentSlideIndex: 0
    };
  }

  render() {
    return (
      <div className={cn(null, 'main')}>
        {this.props.slides.map((slide, index) => (
          <div key={index} className={`${cn('slide-container')}${index === this.state.currentSlideIndex ? ' visible' : ''}`}>
            <div className={cn('slide')} onClick={this.nextSlide}>
              {slide}
            </div>
            <ul className={cn('indicators')}>
              {this.renderIndicators(index)}
            </ul>
          </div>
        ))}
      </div>
    );
  }

  nextSlide = () => {
    const lastIndex = this.props.slides.length - 1;
    const { currentSlideIndex } = this.state;
    const shouldResetIndex = currentSlideIndex === lastIndex;
    const index = shouldResetIndex ? 0 : currentSlideIndex + 1;

    this.setState({
      currentSlideIndex: index
    });
  }

  renderIndicators = (slideIndex) => this.props.slides.map((slide, index) => <li
    key={'indicator' + index} className={`${index === slideIndex ? 'active' : ''}`}
  />)

  proptypes = () => ({
    slides: PropTypes.arrayOf(PropTypes.element).isRequired
  })
}
