import React from 'react';
import { shallow, mount } from 'enzyme';
import IdeaCell from './IdeaCell';

const ideaUpdatingEmpty = {
  title: 'Test title',
  description: 'Test description',
  createdDate: new Date(),
  updatedDate: new Date(),
};
it('renders without crashing', () => {
  shallow(<IdeaCell />);
});

it('renders the right dom elements', () => {
  const wrapper = mount(<IdeaCell idea={ideaUpdatingEmpty} />);
  expect(wrapper.find('.idea-cell .edit-idea-container')).toHaveLength(1);
  expect(wrapper.find('.idea-cell .idea-cell-description').text()).toBe(ideaUpdatingEmpty.description);
});

it('renders the right dom elements in New idea', () => {
  const updateNewIdeaMocked = jest.fn();
  const submitNewIdeaMocked = jest.fn();
  const wrapper = mount(<IdeaCell
    isNewIdea
    newIdea={{
      title: '',
      description: '',
      createdDate: new Date(),
      updatedDate: new Date(),
    }}
    updateNewIdea={updateNewIdeaMocked}
    submitNewIdea={submitNewIdeaMocked}
  />);
  expect(wrapper.find('.idea-cell.new-idea').length).not.toBe(0);

  const newIdeaTitle = wrapper.find('.idea-cell.new-idea .new-title');
  expect(newIdeaTitle.text()).toBe('');

  const newIdeaDescription = wrapper.find('.idea-cell.new-idea .new-description');
  expect(newIdeaDescription.text()).toBe('');
});

it('renders the right dom elements when updating an idea', () => {
  const wrapper = mount(<IdeaCell
    idea={ideaUpdatingEmpty}
  />);

  // Click on Edit button
  const editIdeaButton = wrapper.find('.idea-cell .edit-idea-container .edit-idea');
  expect(editIdeaButton.text()).toBe('Edit');
  editIdeaButton.simulate('click');
  expect(wrapper.find('.idea-cell.updating-idea').length).not.toBe(0);

  // Compare the input values
  const editTitleInput = wrapper.find('.idea-cell.updating-idea .update-title');
  expect(editTitleInput.instance().value).toBe(ideaUpdatingEmpty.title);
  const editDescriptionInput = wrapper.find('.idea-cell.updating-idea .update-description');
  expect(editDescriptionInput.instance().value).toBe(ideaUpdatingEmpty.description);
});

it('Triggers the right event listeners when in New idea', () => {
  const updateNewIdeaMocked = jest.fn();
  const submitNewIdeaMocked = jest.fn();
  const wrapper = mount(<IdeaCell
    isNewIdea
    newIdea={{
      title: '',
      description: '',
      createdDate: new Date(),
      updatedDate: new Date(),
    }}
    updateNewIdea={updateNewIdeaMocked}
    submitNewIdea={submitNewIdeaMocked}
  />);

  // Title change
  const newIdeaTitle = wrapper.find('.idea-cell.new-idea .new-title');
  newIdeaTitle.simulate('change', { target: { value: 'a' } });
  expect(updateNewIdeaMocked).toHaveBeenCalled();

  // Description change
  const newIdeaDescription = wrapper.find('.idea-cell.new-idea .new-description');
  newIdeaDescription.simulate('change', { target: { value: 'a' } });
  expect(updateNewIdeaMocked).toHaveBeenCalled();
});

it('Triggers the right event listeners when updating an idea', () => {
  const submitUpdateIdeaMocked = jest.fn();
  const wrapper = mount(<IdeaCell
    idea={ideaUpdatingEmpty}
    submitUpdateIdea={submitUpdateIdeaMocked}
  />);
  const editIdeaButton = wrapper.find('.idea-cell .edit-idea-container .edit-idea');
  editIdeaButton.simulate('click');

  // Title change
  const editTitleInput = wrapper.find('.idea-cell.updating-idea .update-title');
  editTitleInput.simulate('change', { target: { value: `${ideaUpdatingEmpty.title} edited` } });
  expect(editTitleInput.instance().value).toBe(`${ideaUpdatingEmpty.title} edited`);

  // Description change
  const editDescriptionInput = wrapper.find('.idea-cell.updating-idea .update-description');
  editDescriptionInput.simulate('change', { target: { value: `${ideaUpdatingEmpty.description} edited` } });
  expect(editDescriptionInput.instance().value).toBe(`${ideaUpdatingEmpty.description} edited`);

  // Submit the new idea
  wrapper.find('.idea-cell.updating-idea .update-idea-button').simulate('click');
  expect(submitUpdateIdeaMocked).toHaveBeenCalled();
});
