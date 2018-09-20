import React from 'react';
import {IdeaCell} from './IdeaCell';
import './ideaBoard.css';
export class IdeaBoard extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        ideas: [
          {
            title: 'Default Idea',
            description: 'This is the default description of an idea',
            createdDate: new Date().toString,
            updatedDate: ''
          },
        ],
        newIdea: {
          title: 'New Idea',
          description: '',
          createdDate: '',
          updatedDate: ''
        }
      }
      this.updateTitle = this.updateTitle.bind(this);
      this.updateNewIdeaTitle = this.updateNewIdeaTitle.bind(this);
      this.submitNewIdea = this.submitNewIdea.bind(this);
  }
  updateTitle (idea, newTitle) {
    let allIdeas = this.state.ideas;
    let ideaToUpdate = allIdeas.find(ideaToFind => ideaToFind === idea);
    if (ideaToUpdate) {
      ideaToUpdate.title = newTitle;
      this.setState({ideas: allIdeas});
    }
  };
  updateNewIdeaTitle (event) {
    event.persist();
    this.setState(previousState => ({
      newIdea: {...previousState.newIdea, title: event.target.value}
    }));
  };
  submitNewIdea () {
    let ideaToAdd = this.state.newIdea;
    this.setState(previousState => ({
      ideas: [...previousState.ideas, ideaToAdd],
      newIdea: {
        title: 'New Idea',
        description: '',
        createdDate: '',
        updatedDate: ''
      }
    }));
  };
  render () {
    let state = this.state;
    return (
      <div className="idea-board-container">
        <h1>Idea board</h1>
        <div className="idea-board-ideas-container">
          {state.ideas.length > 0 &&
            state.ideas.map((idea, key) => (
              <IdeaCell key={key}
                idea={idea}
                updateTitle={this.updateTitle}
                // editIdea={this.editIdea}
              />
            ))
          }
          <IdeaCell key={state.ideas.length}
            idea={state.newIdea}
            updateNewIdeaTitle={this.updateNewIdeaTitle}
            isNewIdea={true}
            newIdea={state.newIdea}
            submitNewIdea={this.submitNewIdea}
            // editIdea={this.editIdea}
          />
        </div>
      </div>
    );
  }
}

export default IdeaBoard;