import React, { Component } from 'react';
import ShowOrEdit from 'components/ShowOrEdit';


class IdeaCard extends Component{

    render(){
        const { idea } = this.props; 

        return (
            <li> 
                <ShowOrEdit label={idea.title || ''} />
                <br />
                <ShowOrEdit label={idea.description || ''} />
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

export default IdeaCard;



