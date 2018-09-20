import React from 'react';
export class IdeaCell extends React.Component {
  constructor (props) {
      super(props);
      this.editTitle = this.editTitle.bind(this);
  }
  editTitle (event) {
    this.props.updateTitle(this.props.idea, event.target.value)
  };
  render () {
    let state = this.state;
    let props = this.props;
    return (
      <div className="idea-cell-container">
        {!props.isNewIdea && <div className="idea-cell-title" onClick={this.editTitle}>
          <p>{props.idea.title}</p>
          <input 
            type="text"
            value={props.idea.title}
            onChange={eve => this.editTitle(eve)}/>
        </div>}
        
        {props.isNewIdea && <div className="idea-cell-title">
          <p>{props.newIdea.title}</p>
          <input 
            type="text"
            value={props.newIdea.title}
            onChange={eve => this.props.updateNewIdeaTitle(eve)}/>
          <button onClick={props.submitNewIdea}>Add Idea</button>
        </div>}
        <div className="idea-cell-description">
          {props.idea.description}
        </div>
        <div className="idea-cell-creation-date">
          {props.idea.createdDate}
        </div>
      </div>
    )
  }
}
export default IdeaCell;