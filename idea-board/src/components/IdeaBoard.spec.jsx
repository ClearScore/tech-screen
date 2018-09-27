import React from 'react';
import { shallow, mount } from 'enzyme';
import IdeaBoard from './IdeaBoard';

it('renders without crashing', () => {
  shallow(<IdeaBoard />);
});

it('renders the right dom elements', () => {
  const wrapper = mount(<IdeaBoard />);
  expect(wrapper.find('.idea-board-container')).toHaveLength(1);

  // Sort ideas by
  const selectElement = wrapper.find('.sort-ideas-byfield').instance();
  expect(selectElement.value).toBe('Sort by');
  expect(selectElement.children.length).toBe(3);

  // Number of ideas rendered
  expect(wrapper.find('.idea-board-ideas-container').children().length).toBe(1);
});

it('adds a new idea', () => {
  const wrapper = mount(<IdeaBoard />);

  // New idea fields change
  const newIdeaTitle = wrapper.find('.idea-cell.new-idea .new-title');
  newIdeaTitle.simulate('change', { target: { value: 'a' } });
  const newIdeaDescription = wrapper.find('.idea-cell.new-idea .new-description');
  newIdeaDescription.simulate('change', { target: { value: 'a' } });
  const editIdeaButton = wrapper.find('.idea-cell .new-idea-add-button');
  editIdeaButton.simulate('click');
  // Number of ideas rendered
  expect(wrapper.find('.idea-board-ideas-container').children().length).toBe(2);
});
