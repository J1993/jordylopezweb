import React, { Component } from 'react'
import './css/Home.css'
import {Link} from "react-router-dom";

class Home extends Component {
    render() {
        return (
            <div className="container homeContainer">
                <div className="row">
                    <div className="col s12 m8">
                        <p className="hello">Hello there, I am</p>
                        <h1 className="title">Jordy Lopez</h1>
                        <p className="subtitle">Front-end Developer / Web Designer</p>
                        <Link to="/portfolio" className="focused">PORTFOLIO</Link>
                        {/*<Link to="/about" className="unfocused">ABOUT ME</Link>*/}
                    </div>
                </div>
            </div>
        )
    }
}

export default Home
