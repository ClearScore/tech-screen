import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from 'actions'
import ShowOrEdit from 'components/ShowOrEdit';
import { editIdea } from './../actions/index';



class IdeaCard extends Component{

    

    getInputValue = (input, inputName) =>{   
        
        const editedIdea = {
            id: this.props.idea.id,
            title: this.props.idea.title || '',
            description: this.props.idea.title || ''
        }

        const editIdea2 = { ...editedIdea, [inputName]: input}
        
        console.log(editIdea2);
          
        this.props.editIdea(editIdea2)  
    }

    render(){
        
        const { idea } = this.props; 

        return (
            <li> 
                <ShowOrEdit name='title' label={idea.title || ''} sendValueUp={this.getInputValue}/>
                <br />
                <ShowOrEdit name='description' label={idea.description || ''} sendValueUp={this.getInputValue}/>
                <br />
                {idea.dateCreated.getFullYear()}
                <a href='#' className='delete-btn' 
                    onClick={this.props.handleDelete.bind(null,idea.id)}>
                    [X]
                </a> 
            </li>
        )
    }
 
}

export default connect(null, actions)(IdeaCard);



