import React, { Component } from 'react'

class IdeasAddFilter extends Component {

    // constructor(props) {
    //     super(props)

    //     this.handleClick = handleClick.bind(this)
    // }

    // handleClick(e) {
    //     e.preventDefault()
    //     //dispatch 'ADD' action type
    // }

    render() {
        return (
        <div>
            <button>ADD IDEA</button>
            <button>SORT BY TITLE</button>
            <button>SORT BY DATE</button>
        </div>
        )
    }
}

export default IdeasAddFilter;
