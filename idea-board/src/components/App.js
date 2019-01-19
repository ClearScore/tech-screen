import React, { Component } from 'react';
import IdeasAddAndFilter from 'components/IdeasAddAndFilter';
import IdeasList from 'components/IdeasList';


class App extends Component {

    render() {
        return (
            <div className='main-wrapper'>
                <IdeasAddAndFilter />
                <IdeasList />
            </div>
        );
    }
}

export default App;

// <IdeasList ideas={this.state.ideas} filter={this.state.activeFilter}/>
