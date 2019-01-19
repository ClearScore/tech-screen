import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'actions'

class IdeasAddAndFilter extends Component {

    handleClick = () => {    
        //dispatch 'ADD' action type
        this.props.addIdea()
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

// IdeasAddAndFilter.propTypes = {
//     actions: PropTypes.object.isRequired
// }

export default connect(null, actions)(IdeasAddAndFilter);
