import React, { Component } from 'react';
import {withRouter} from 'react-router-dom';

class Course extends Component {
    componentDidUpdate(){
        console.log(this.props);
    }
    render () {
        return (
            <div>
                <h1>{this.props.history.queryparams}</h1>
                <p>You selected the Course with ID:{this.props.match.params.id}</p>
            </div>
        );
    }
}

export default withRouter(Course);