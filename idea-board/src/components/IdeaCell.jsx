import React from 'react';
import MomentComponent from './MomentComponent';

const ideaUpdating = {
  title: '',
  description: '',
  createdDate: '',
  updatedDate: ''
};

export class IdeaCell extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        ideaUpdating,
        isUpdatingIdea: false
      }
      this.displayIdea = this.displayIdea.bind(this);
      this.editIdea = this.editIdea.bind(this);
      this.updateIdeaField = this.updateIdeaField.bind(this);
      this.updateIdeaHandler = this.updateIdeaHandler.bind(this);
  }
  editIdea () {
    this.setState({
      ideaUpdating: Object.assign({}, this.props.idea),
      isUpdatingIdea: true
    });
  };
  updateIdeaField (event, field) {
    event.persist();
    this.setState(previousState => ({
      ideaUpdating: {...previousState.ideaUpdating, [field]: event.target.value}
    }));
  };
  updateIdeaHandler() {
    this.props.submitUpdateIdea(this.state.ideaUpdating, this.props.idea);
    this.setState({
      ideaUpdating,
      isUpdatingIdea: false
    });
  }
  //Content renderers: 
  displayIdea(idea) {
    return (
      <div className="idea-cell">
        <div className="edit-idea-container">
          <button className="edit-idea" onClick={this.editIdea}>Edit</button>
          <label>{idea.title}</label>
        </div>
        <div className="idea-cell-description">
          {idea.description}
        </div>
        Idea created or updated: 
        <MomentComponent className="idea-cell-creation-date" dateToCompare={idea.updatedDate || idea.createdDate}>
        </MomentComponent>
      </div>
    )
  }
  displayEditIdea(idea) {
    return (
      <div className="idea-cell updating-idea">
        <input 
          type="text"
          className="update-title"
          value={idea.title}
          onChange={eve => this.updateIdeaField(eve, 'title')}/>
        <label>Description: </label>
        <input 
          type="text"
          className="update-description"
          value={idea.description}
          onChange={eve => this.updateIdeaField(eve, 'description')}/>
        <button className="update-idea-button" onClick={this.updateIdeaHandler}>Update Idea</button>
      </div>
    )
  }
  displayAddNewIdea(idea) {
    return (
      <div className="idea-cell new-idea">
        <label>Title: </label>
        <input 
          type="text"
          className="new-title"
          placeholder="new title"
          value={idea.title}
          onChange={eve => this.props.updateNewIdea(eve, 'title')}/>
        <label>Description: </label>
        <input 
          type="text"
          className="new-description"
          value={idea.description}
          onChange={eve => this.props.updateNewIdea(eve, 'description')}/>
        <button className="new-idea-add-button" onClick={this.props.submitNewIdea}>Add Idea</button>
      </div>
    )
  }
  render () {
    let state = this.state;
    let props = this.props;
    return (
      <div className="idea-cell-container">
        {!props.isNewIdea && !state.isUpdatingIdea && this.displayIdea(props.idea)}
        {!props.isNewIdea && state.isUpdatingIdea && this.displayEditIdea(state.ideaUpdating)}
        {props.isNewIdea && this.displayAddNewIdea(props.newIdea)}
      </div>
    )
  }
}
export default IdeaCell;