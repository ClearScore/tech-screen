import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { setVisibilityFilter } from '../actions'


class FilterButton extends Component{

    constructor(props){
        super(props)
        this.filter = props.filter
        this.active = props.active
    }

    setFilter = () => {
        console.log(this.filter);
        
        this.props.setVisibilityFilter(this.filter)
    }

    render(){
        return (
            <button
                className={!!this.active ? 'active': 'disabled'}
                style={{ cursor: 'pointer' }}
                onClick={() => this.setFilter}
            >
                {this.props.children}
            </button>
        )
    } 
}

FilterButton.propTypes = {
    children: PropTypes.node.isRequired,
    filter: PropTypes.string.isRequired,
    active: PropTypes.bool.isRequired
}


const mapStateToProps = (state, ownProps) => ({
    active: ownProps.filter === state.visibilityFilter
})

export default connect(mapStateToProps, {setVisibilityFilter})(FilterButton)