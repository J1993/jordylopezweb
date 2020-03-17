import React, { Component } from 'react'
import dataBase from '../Firebase'

class Projects extends Component {

    state = {
        projects:[]
    };

    async componentDidMount() {
        const projectsArray = [];

        dataBase
            .collection('projects')
            .get()
            .then((snapShot) => {
                snapShot.forEach((snap) => {
                    projectsArray.push(snap.data());
                })
                this.setState({projects:projectsArray});
                console.log(this.state)

            }, error => {
                console.log('error')
            }
        );

    }

    render() {

        const projects = this.state.projects.map((project, key) => {
            return (
                <div className="col s12 m6" key={key}>
                    <div className="card medium" >
                        <div className="card-image">
                            <img alt="Web page" src="https://firebasestorage.googleapis.com/v0/b/shoppinglist-react.appspot.com/o/IMG_20190828_191119.jpg?alt=media&token=0d8b4086-2d88-4c85-90a8-d505459db6f9"/>                            
                        </div>
                        <div className="card-content">
                            <p className="black-text center-align">{project.status}</p>
                            <span className="card-title black-text center-align">{project.title}</span>
                        </div>
                        <div className="card-action">
                            <a href={project.url} className="black-text github">GITHUB</a>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">                    
                    {projects}
                </div>
            </div>
        )
    }


}

export default Projects
