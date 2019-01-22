import React, { Component } from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import * as actions from 'actions'
import * as types from 'actions/types'
import FilterButton from 'components/FilterButton'

const FILTER_TITLES = {
    [types.BY_DATE]: 'BY DATE',
    [types.BY_TITLE]: 'BY TITLE'
}

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
            {Object.keys(FILTER_TITLES).map(filter => (
                    <div key={filter}>
                        <FilterButton filter={filter}>
                            {FILTER_TITLES[filter]}
                        </FilterButton>
                    </div>
                )
            )}
        </div>
        )
    }
}

IdeasAddAndFilter.propTypes = {
    addIdea: PropTypes.func.isRequired
}

export default connect(null, actions)(IdeasAddAndFilter);
