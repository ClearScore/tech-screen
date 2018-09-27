import React from 'react';
import { IdeaCell } from './IdeaCell';
import './ideaBoard.css';

const newIdea = {
  title: '',
  description: '',
  createdDate: new Date(),
  updatedDate: new Date(),
};
const MAX_DESC_LENGTH = 140;

export class IdeaBoard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideas: [],
      newIdea,
    };
    this.sortBySelector = React.createRef();
    this.sortIdeasByField = this.sortIdeasByField.bind(this);
    this.updateNewIdea = this.updateNewIdea.bind(this);
    this.submitUpdateIdea = this.submitUpdateIdea.bind(this);
    this.submitNewIdea = this.submitNewIdea.bind(this);
    this.deleteIdea = this.deleteIdea.bind(this);
  }

  updateNewIdea(event, field) {
    if (event.target.value.length >= MAX_DESC_LENGTH) return;
    event.persist();
    this.setState(previousState => ({
      newIdea: { ...previousState.newIdea, [field]: event.target.value },
    }));
  }

  submitUpdateIdea(ideaToUpdate, ideaToReplace) {
    ideaToUpdate.updatedDate = new Date();
    const { ideas: allIdeas } = this.state;
    const allOtherIdeas = allIdeas.filter(idea => idea !== ideaToReplace);
    // Sort by Id
    const stateIdeas = [...allOtherIdeas, ideaToUpdate].sort((idea, nextIdea) => (
      idea.id < nextIdea.id ? -1 : idea.id > nextIdea.id ? 1 : 0
    ));
    this.setState({
      ideas: stateIdeas,
    });
    this.sortIdeasByField();
  }

  submitNewIdea() {
    const { newIdea: ideaToAdd, ideas } = this.state;
    if (ideaToAdd.title.length <= 0) return;
    ideaToAdd.createdDate = new Date();
    ideaToAdd.id = ideas.length + 1;
    this.setState(previousState => ({
      ideas: [...previousState.ideas, ideaToAdd],
      newIdea,
    }));
    this.sortIdeasByField();
  }

  deleteIdea(ideaToDelete) {
    const { ideas } = this.state;
    const allOtherIdeas = ideas.filter(idea => idea !== ideaToDelete);
    this.setState({
      ideas: allOtherIdeas,
    });
    this.sortIdeasByField();
  }

  sortIdeasByField() {
    const field = this.sortBySelector.current ? this.sortBySelector.current.value : null;
    if (!field || field === 'Sort by') return;
    this.setState(previousState => ({
      ideas: previousState.ideas.sort((idea, nextIdea) => (
        idea[field] < nextIdea[field] ? -1 : idea[field] > nextIdea[field] ? 1 : 0
      )),
    }));
  }

  render() {
    const { state } = this;
    return (
      <div className="idea-board-container">
        <h1>Idea board</h1>
        <select
          className="sort-ideas-byfield"
          onChange={this.sortIdeasByField}
          defaultValue="Sort by"
          ref={this.sortBySelector}
        >
          <option value="Sort by">Sort by</option>
          <option value="title">By title</option>
          <option value="createdDate">By creation</option>
        </select>
        <div className="idea-board-ideas-container">
          {state.ideas.length > 0
            && state.ideas.map(idea => (
              <IdeaCell
                key={idea.id}
                idea={idea}
                submitUpdateIdea={this.submitUpdateIdea}
                deleteIdea={this.deleteIdea}
              />
            ))
          }
          <IdeaCell
            key={state.ideas.length}
            idea={state.newIdea}
            updateNewIdea={this.updateNewIdea}
            isNewIdea
            newIdea={state.newIdea}
            submitNewIdea={this.submitNewIdea}
            maxDescriptionLength={MAX_DESC_LENGTH}
          />
        </div>
      </div>
    );
  }
}

export default IdeaBoard;
