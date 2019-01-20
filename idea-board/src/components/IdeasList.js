import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import IdeaCard from 'components/IdeaCard';

class IdeasList extends Component {

    handleDelete = (id) =>{
        console.log(id);    
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
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        dateCreated: PropTypes.object.isRequired
    }).isRequired).isRequired
}

export default connect(mapStateToProps)(IdeasList);
