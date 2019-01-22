import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import IdeaCard from 'components/IdeaCard';
import { deleteIdea } from 'actions'

class IdeasList extends Component {

    handleDelete = (id) =>{
        this.props.deleteIdea(id)
    }

    renderIdeas = (ideas) => 
        (
            ideas.map(idea => 
                <section key={idea.id}>
                    <IdeaCard idea={idea} handleDelete={this.handleDelete}/>  
                </section>    
            )
        )
    

    render() {
        const {ideas} = this.props
        return (
        <div>
            {!!ideas && 
                <ul>
                    {this.renderIdeas(ideas)}
                </ul>
            }
        </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
    return {
        ideas: state.ideas
    }
}


IdeasList.propTypes = {
    ideas: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string,
        description: PropTypes.string,
        dateCreated: PropTypes.object
    }).isRequired).isRequired,
    deleteIdea: PropTypes.func.isRequired
}

export default connect(mapStateToProps, {deleteIdea})(IdeasList);
