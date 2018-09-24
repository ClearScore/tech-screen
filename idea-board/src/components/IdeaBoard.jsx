import React from 'react';
import {IdeaCell} from './IdeaCell';
import './ideaBoard.css';

const newIdea = {
  title: '',
  description: '',
  createdDate: '',
  updatedDate: ''
};

export class IdeaBoard extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        ideas: [
          {
            title: 'Default Idea',
            description: 'This is the default description of an idea',
            createdDate: new Date(),
            updatedDate: ''
          },
        ],
        newIdea
      }
      this.sortBySelector = React.createRef();
      this.sortIdeasByField = this.sortIdeasByField.bind(this);
      this.updateNewIdea = this.updateNewIdea.bind(this);
      this.submitUpdateIdea = this.submitUpdateIdea.bind(this);
      this.submitNewIdea = this.submitNewIdea.bind(this);
  }
  updateNewIdea (event, field) {
    event.persist();
    this.setState(previousState => ({
      newIdea: {...previousState.newIdea, [field]: event.target.value}
    }));
  };
  submitUpdateIdea (ideaToUpdate, ideaToReplace) {
    ideaToUpdate.updatedDate = new Date();
    let allIdeas = this.state.ideas;
    let allOtherIdeas = allIdeas.filter(idea => idea !== ideaToReplace);
    this.setState({
      ideas: [...allOtherIdeas, ideaToUpdate]
    });
  };
  submitNewIdea () {
    let ideaToAdd = this.state.newIdea;
    ideaToAdd.createdDate = new Date();
    this.setState(previousState => ({
      ideas: [...previousState.ideas, ideaToAdd],
      newIdea
    }));
    this.sortIdeasByField(this.sortBySelector.current.value);
  };
  sortIdeasByField() {
    const field = this.sortBySelector.current ? this.sortBySelector.current.value : null;
    if (!field || field === "Sort by") return;
    this.setState(previousState => ({
      ideas: previousState.ideas.sort((idea, nextIdea) => idea[field] < nextIdea[field] ? -1 : idea[field] > nextIdea[field] ? 1 : 0)
    }));
  }
  render () {
    let state = this.state;
    return (
      <div className="idea-board-container">
        <h1>Idea board</h1>
        <select
          className="sort-ideas-byfield"
          onChange={this.sortIdeasByField} 
          defaultValue="Sort by"
          ref={this.sortBySelector}>
          <option value="Sort by">Sort by</option>
          <option value="title">By title</option>
          <option value="createdDate">By creation</option>
        </select>
        <div className="idea-board-ideas-container">
          {state.ideas.length > 0 &&
            state.ideas.map((idea, key) => (
              <IdeaCell key={key}
                idea={idea}
                submitUpdateIdea={this.submitUpdateIdea}
              />
            ))
          }
          <IdeaCell key={state.ideas.length}
            idea={state.newIdea}
            updateNewIdea={this.updateNewIdea}
            isNewIdea={true}
            newIdea={state.newIdea}
            submitNewIdea={this.submitNewIdea}
          />
        </div>
      </div>
    );
  }
}

export default IdeaBoard;