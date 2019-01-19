import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class IdeasList extends Component {

    renderIdeas = (ideas) => 
        (
            ideas.map(idea => 
                <li key={idea.id}>
                    {idea.title} 
                    <br/>
                    {idea.description}
                    <br/>
                    {idea.dateCreated.getFullYear()}
                </li>
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
