import React, { Component } from 'react'
import imageDefault from '../images/default-image.png' 

class Home extends Component {
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col s12 m8">
                        <p className="">Hello there,</p>
                        <p>I am <span>Jordy Lopez</span></p>
                        <p className="">Front-end Developer and Web Designer</p>
                        <p className="">Ecuadorian around the world</p>
                    </div>
                    <div className="col s12 m4">Yo</div>
                </div>
            </div>
        )
    }
}

export default Home
