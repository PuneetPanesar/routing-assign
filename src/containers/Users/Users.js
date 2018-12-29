import React, { Component } from 'react';

class Users extends Component {
    
    componentDidMount(){
        console.log(this.props);
    }
    
    render () {
        return (
            <div>
                <h1>The Users Page</h1>
            </div>
        );
    }
}

export default Users;