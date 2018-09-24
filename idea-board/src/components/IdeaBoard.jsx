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
            createdDate: new Date(),
            updatedDate: ''
          },
        ],
        newIdea: {
          title: '',
          description: '',
          createdDate: '',
          updatedDate: ''
        }
      }
      this.updateTitle = this.updateTitle.bind(this);
      this.updateNewIdea = this.updateNewIdea.bind(this);
      this.submitUpdateIdea = this.submitUpdateIdea.bind(this);
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
  updateNewIdea (event, field) {
    event.persist();
    this.setState(previousState => ({
      newIdea: {...previousState.newIdea, [field]: event.target.value}
    }));
  };
  submitUpdateIdea (event, ideaToUpdate, ideaToReplace) {
    //TODO: replace the idea updated
    console.log('ideaToUpdate ', ideaToUpdate);
    console.log('ideas: ', this.state.ideas);
  };
  submitNewIdea () {
    let ideaToAdd = this.state.newIdea;
    ideaToAdd.createdDate = new Date();
    this.setState(previousState => ({
      ideas: [...previousState.ideas, ideaToAdd],
      newIdea: {
        title: '',
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