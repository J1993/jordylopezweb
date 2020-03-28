import React, { Component } from 'react'
import "./css/Projects.css"
import dataBase from '../Firebase'

class Projects extends Component {

    state = {
        projects:[]
    };

    componentDidMount() {
        const projectsArray = [];

        dataBase
            .collection('projects')
            .get()
            .then((snapShot) => {
                snapShot.forEach((snap) => {
                    projectsArray.push(snap.data());
                })
                this.setState({projects:projectsArray});

            }, error => {
                console.log(error)
            }
        );

    }

    render() {

        const projects = this.state.projects.map((project, key) => {
            return (
                <div className="col s12 m6" key={key}>
                    <div className="card medium hoverable" >
                        <div className="card-image">
                            <img alt="Web page" src={project.image} loading="lazy"/>                            
                        </div>
                        <div className="card-content">
                            <p className="black-text center-align">{project.status}</p>
                            <span className="card-title black-text center-align">{project.title}</span>
                        </div>
                        <div className="card-action">
                            <a href={project.url} target="_blank" className="black-text github">GITHUB</a>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="containerBackground">
                <div className="container">
                    <div className="row containerProjects">                    
                        {projects}
                    </div>
                </div>
            </div>
        )
    }


}

export default Projects
