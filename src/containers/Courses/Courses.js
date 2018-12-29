import React, { Component } from 'react';
import Course from '../../containers/Course/Course';
import './Courses.css';
import {Route,Link} from 'react-router-dom';

class Courses extends Component {
    state = {
        courses: [
            { id: 1, title: 'Angular - The Complete Guide' },
            { id: 2, title: 'Vue - The Complete Guide' },
            { id: 3, title: 'PWA - The Complete Guide' }
        ]
    }
    componentDidMount(){
        console.log(this.props);
    }
    
    clickHandler=(id,title)=>{
        this.props.history.push('/Courses/Course/'+id);
        this.props.history.queryparams=title;
    }

    render () {
        return (
            <div>
                <h1>Amazing Udemy Courses</h1>
                <section className="Courses">
                    {
                        this.state.courses.map( course => {
                            return (<article  onClick={this.clickHandler.bind(this,course.id,course.title)} className="Course" 
                                key={course.id}>{course.title}</article>
                                )       
                        } )
                    }
                </section>
               <Route path= {this.props.match.url +"/Course/:id"} exact component={Course}/>
            </div>
        );
    }
}

export default Courses;