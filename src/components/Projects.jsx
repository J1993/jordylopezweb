import React, { Component } from 'react'
import "./css/Projects.css"
import dataBase from '../Firebase'
import ReactLoading from 'react-loading'

class Projects extends Component {

    state = {
        projects:[],
        isLoading: false
    };

    componentDidMount() {
        const projectsArray = [];

        //Fetch the data from Firestore and saving it on the previus array declaration.
        dataBase
            .collection('projects')
            .get()
            .then((snapShot) => {
                snapShot.forEach((snap) => {
                    projectsArray.push(snap.data());
                })
                this.setState({projects:projectsArray, isLoading:true});

            }, error => {
                console.log(error)
            }
        );
    }

    render() {
        //Loading state and Loading Screen.
        const {isLoading} = this.state;
        const loadingScreen = <ReactLoading type="bars" color="#1473cc" className="loading"/>;

        //Each project to be listed from the current state
        const projects = this.state.projects.map((project, key) => {
            return (
                <div className="col s12 m6" key={key}>
                    <div className="card medium hoverable" >
                        <div className="card-image">
                            <img alt="Web page" src={project.image}/>                            
                        </div>
                        <div className="card-content">
                            <p className="black-text center-align">{project.status}</p>
                            <span className="card-title black-text center-align">{project.title}</span>
                        </div>
                        <div className="card-action">
                            <a href={project.url} target="_blank" rel="noopener noreferrer" className="black-text github">GITHUB</a>
                        </div>
                    </div>
                </div>
            )
        })

        return (
            <div className="containerBackground">
                <div className="container">
                    <div className="row containerElements">                    
                        {
                            //Condition to switch between the loading screen and the fetched data.
                            isLoading ?  projects : loadingScreen
                        }
                    </div>
                </div>
            </div>
        )
    }
}

export default Projects
