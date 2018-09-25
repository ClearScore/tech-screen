import React from 'react';
import PropTypes from 'prop-types';
import MomentComponent from './MomentComponent';

const ideaUpdatingEmpty = {
  title: '',
  description: '',
  createdDate: '',
  updatedDate: '',
};

export class IdeaCell extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ideaUpdating: ideaUpdatingEmpty,
      isUpdatingIdea: false,
    };
    this.displayIdea = this.displayIdea.bind(this);
    this.editIdea = this.editIdea.bind(this);
    this.updateIdeaField = this.updateIdeaField.bind(this);
    this.updateIdeaHandler = this.updateIdeaHandler.bind(this);
  }

  editIdea() {
    const { idea } = this.props;
    this.setState({
      ideaUpdating: Object.assign({}, idea),
      isUpdatingIdea: true,
    });
  }

  updateIdeaField(event, field) {
    event.persist();
    this.setState(previousState => ({
      ideaUpdating: { ...previousState.ideaUpdating, [field]: event.target.value },
    }));
  }

  updateIdeaHandler() {
    const { ideaUpdating } = this.state;
    const { idea, submitUpdateIdea } = this.props;
    submitUpdateIdea(ideaUpdating, idea);
    this.setState({
      ideaUpdating,
      isUpdatingIdea: false,
    });
  }

  // Content renderers:
  displayIdea(idea) {
    return (
      <div className="idea-cell">
        <div className="edit-idea-container">
          <button className="edit-idea" onClick={this.editIdea} type="button">Edit</button>
          <span>{idea.title}</span>
        </div>
        <div className="idea-cell-description">
          {idea.description}
        </div>
        Idea created or updated:
        <MomentComponent className="idea-cell-creation-date" dateToCompare={idea.updatedDate || idea.createdDate} />
      </div>
    );
  }

  displayEditIdea(idea) {
    return (
      <div className="idea-cell updating-idea">
        <input
          type="text"
          className="update-title"
          value={idea.title}
          onChange={eve => this.updateIdeaField(eve, 'title')}
        />
        <span>Description: </span>
        <input
          type="text"
          className="update-description"
          value={idea.description}
          onChange={eve => this.updateIdeaField(eve, 'description')}
        />
        <button className="update-idea-button" onClick={this.updateIdeaHandler} type="button">Update Idea</button>
      </div>
    );
  }

  displayAddNewIdea() {
    const { updateNewIdea, submitNewIdea, newIdea } = this.props;
    return (
      <div className="idea-cell new-idea">
        <span>Title: </span>
        <input
          type="text"
          className="new-title"
          placeholder="new title"
          value={newIdea.title}
          onChange={eve => updateNewIdea(eve, 'title')}
        />
        <span>Description: </span>
        <input
          type="text"
          className="new-description"
          value={newIdea.description}
          onChange={eve => updateNewIdea(eve, 'description')}
        />
        <button className="new-idea-add-button" onClick={submitNewIdea} type="button">Add Idea</button>
      </div>
    );
  }

  render() {
    const { state, props } = this;
    return (
      <div className="idea-cell-container">
        {!props.isNewIdea && !state.isUpdatingIdea && this.displayIdea(props.idea)}
        {!props.isNewIdea && state.isUpdatingIdea && this.displayEditIdea(state.ideaUpdating)}
        {props.isNewIdea && this.displayAddNewIdea()}
      </div>
    );
  }
}
const ideaShape = {
  id: PropTypes.number,
  title: PropTypes.string,
  description: PropTypes.string,
  createdDate: PropTypes.instanceOf(Date),
};
IdeaCell.propTypes = {
  idea: PropTypes.shape(ideaShape),
  newIdea: PropTypes.shape(ideaShape),
  updateNewIdea: PropTypes.func,
  submitNewIdea: PropTypes.func,
  submitUpdateIdea: PropTypes.func,
};
IdeaCell.defaultProps = {
  idea: ideaUpdatingEmpty,
  newIdea: ideaUpdatingEmpty,
  updateNewIdea: () => {},
  submitNewIdea: () => {},
  submitUpdateIdea: () => {},
};
export default IdeaCell;
