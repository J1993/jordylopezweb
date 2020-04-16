import React from 'react'
import './portfolio.css'
import Projects from '../../components/Projects/Projects'

const Portfolio = () => {

    return (
        <div>
            <div className="header">
                <h2 className="titleH2 center-align">Portfolio</h2>
                <p className="summary center-align">A quick view of my old and recent work</p>
            </div>

            <Projects />
        </div>
    );

}

export default Portfolio
