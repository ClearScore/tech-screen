import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'actions'

class IdeasAddAndFilter extends Component {

    handleClick = () => {  
        //THIS STARTING INPUT DEFAULT TEXT FOR EACH IDEA CARD
        const initialValues = { 
            title: 'Add title here...', 
            description: 'Write about your idea...' 
        }
        this.props.addIdea(initialValues)
    }

    render() {
        return (
        <div>
            <button className='add-button' onClick={this.handleClick}>ADD IDEA</button>
            <button>SORT BY TITLE</button>
            <button>SORT BY DATE</button>
        </div>
        )
    }
}

IdeasAddAndFilter.propTypes = {
    addIdea: PropTypes.func.isRequired
}

export default connect(null, actions)(IdeasAddAndFilter);
