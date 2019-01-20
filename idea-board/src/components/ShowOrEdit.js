import React, { Component } from 'react'
import {connect} from 'react-redux'
import * as actions from 'actions'


class ShowOrEdit extends Component {

    state = {
        value: this.props.label || '',
        editing: false
    }


    handleEditing = () => this.setState({ 
        editing: true, 
        value: this.state.value 
    });


    handleEditingChange = (event) => this.setState({ 
        value: event.target.value 
    });
    
    handleEditingDone = () => {
        this.setState({ 
            editing: false 
        })
        this.props.sendValueUp(this.state.value, this.props.name)
        //dispatch action to send edited payload , reducer adds timestamp
    }

    render(){
        return (
            <div>
                {this.state.editing ? 
                    <input type='text'
                        value={this.state.value}
                        onBlur={this.handleEditingDone}
                        onChange={this.handleEditingChange}
                        autoFocus="true"
                    />
                    :
                    <div onDoubleClick={this.handleEditing}>
                        <label>
                            {this.state.value}
                        </label>
                    </div>            
                }
            </div>
        )
    }
}



export default connect(null, actions)(ShowOrEdit);
