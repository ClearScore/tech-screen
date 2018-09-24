import React from 'react';
import MomentComponent from './MomentComponent';
export class IdeaCell extends React.Component {
  constructor (props) {
      super(props);
      this.state = {
        ideaUpdating: {
          title: '',
          description: '',
          createdDate: '',
          updatedDate: ''
        },
        isUpdatingIdea: false
      }
      this.editIdea = this.editIdea.bind(this);
      this.updateIdeaField = this.updateIdeaField.bind(this);
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
  render () {
    let state = this.state;
    let props = this.props;
    return (
      <div className="idea-cell-container">
        {!props.isNewIdea && !state.isUpdatingIdea &&
          <div className="idea-cell">
            <button className="edit-idea" onClick={this.editIdea}>...</button>
            <label>{props.idea.title}</label>
            <div className="idea-cell-description">
              {props.idea.description}
            </div>
            <MomentComponent className="idea-cell-creation-date" dateToCompare={props.idea.createdDate}>
            </MomentComponent>
          </div>
        }
        {!props.isNewIdea && state.isUpdatingIdea &&
          <div className="idea-cell updating-idea">
            <input 
              type="text"
              className="update-title"
              value={state.ideaUpdating.title}
              onChange={eve => this.updateIdeaField(eve, 'title')}/>
            <label>Description: </label>
            <input 
              type="text"
              className="update-description"
              value={state.ideaUpdating.description}
              onChange={eve => this.updateIdeaField(eve, 'description')}/>
            <button className="update-idea-button" onClick={event => props.submitUpdateIdea(event, state.ideaUpdating, props.idea)}>Update Idea</button>
          </div>
        }
        
        {props.isNewIdea && 
          <div className="idea-cell new-idea">
            <label>Title: </label>
            <input 
              type="text"
              className="new-title"
              placeholder="new title"
              value={props.newIdea.title}
              onChange={eve => props.updateNewIdea(eve, 'title')}/>
            <label>Description: </label>
            <input 
              type="text"
              className="new-description"
              value={props.newIdea.description}
              onChange={eve => props.updateNewIdea(eve, 'description')}/>
            <button className="new-idea-add-button" onClick={props.submitNewIdea}>Add Idea</button>
          </div>
        }
      </div>
    )
  }
}
export default IdeaCell;