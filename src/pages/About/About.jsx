import React from 'react'
import "./About.css"
import yo from "../../images/yo.png"
import email from "../../images/email.svg"
import instagram from "../../images/instagram.svg"
import github from "../../images/github.svg"
import pdf from "../../images/jordy-lopez-cv.pdf"

const About = () => {
    
    return (
        <div>

            <div className="header">

                <h2 className="titleH2 center-align">About me</h2>
                <p className="summary center-align">Dig deeper in my profile</p>
            
            </div>

            <div className="tileBackground">

                <div className="container">

                    <div className="row center-align">

                        {/*** Introduccion ***/}
                        <div className="col s12 tile introduction">
                            
                            <div className="col s12 m4 profileContainer">

                                <div className="circularContainer">
                                    <img className="" src={yo} alt="my face"/>
                                </div>
                                <h3 className="name">Jordy Lopez</h3>
                                <p className="profession">Web Designer | Front-end Developer</p>
                                <a className="iconLink" href="https://github.com/J1993" target="_blank" rel="noopener noreferrer"><img src={github} alt=""/></a>
                                <a className="iconLink" href="https://www.instagram.com/jordylopez.dev" target="_blank" rel="noopener noreferrer"><img src={instagram} alt=""/></a>
                                <a className="iconLink" href="mailto:jordizeus93@gmail.com?Subject=Info%20email%20from%20website" target="_blank" rel="noopener noreferrer"><img src={email} alt=""/></a>
                                <div className="col s12">
                                    <a className="btn download" href={pdf} download>
                                        <span>Download CV</span>
                                        <i className="material-icons small right">cloud_download</i>
                                    </a>
                                </div>
                          
                            </div>

                            <div className="col s12 m8 normalContainer">

                                <div className="col s12 greetings">

                                    <h4>Hello, I'm Jordy!</h4>
                                    <p>I am programmer since 2013, originally from Ecuador and based at UK.  
                                        <span> JavaScript </span> professional and <span> reactJS </span> lover. 
                                        I have rich experience 
                                        in website design and building. I am really good at <span> Adobe XD </span> and 
                                        <span> Firebase</span>. Consider myself as a enthusiastic person with social 
                                        abilities to work either as a team or individual.</p>
                                    <hr/>

                                </div>

                                <div className="col s12 m7 information">

                                    <h5>Personal info</h5>
                                    <div className="col s4 bold">

                                        <p>Age</p>
                                        <p>Residence</p>
                                        <p>e-mail</p>
                                        <p>Phone</p>
                                    
                                    </div>
                                    <div className="col s8 noBold">

                                        <p>26</p>
                                        <p>Newcastle,UK</p>
                                        <p>jordizeus93@gmail.com</p>
                                        <p>+44 7492040012</p>
                                    
                                    </div>

                                </div>

                                <div className="col s12 m5 information">

                                    <h5>Languages</h5>
                                    <div className="col s4 bold">

                                        <p>Spanish</p>
                                        <p>English</p>
                                        <p>Italian</p>
                                        <p>Catalan</p>
                                    
                                    </div>
                                    <div className="col s8 noBold">

                                        <p>mother tongue</p>
                                        <p>proficient</p>
                                        <p>intermediate</p>
                                        <p>advanced</p>

                                    </div>

                                </div>

                                </div>

                        </div>
                        
                        {/*** Work Experience ***/}
                        <div className="col s12 tile normalContainer">

                            <div className="col s12 m4 sectionTitle">

                                <h4>Experience</h4>

                            </div>

                            <div className="col s12 m8 sectionInfo">

                                    <div>

                                        <h6 className="rol">&#60;&#62; Web Designer | Front-end Developer</h6>
                                        <p className="companyPlace"><a href="https://jordylopez.dev" target="_blank" rel="noopener noreferrer">Jordy Lopez</a>, Newcastle, UK - 2018</p>
                                        <p className="rolSummary">Self-employed. I have been working on my own and developing websites to private customers. 
                                        Many of the requested websites have been developed with HTML5, CSS3, JavaScript and Firestore. In the same way, I have been developing my own
                                        skills and knowledge by adopting React.js as my prefered JS library and Material Design as my prefered CSS framework to design websites.
                                        Most of my experience, since then, has been increasing through the documentation and self-taught.  </p>

                                    </div>

                                    <div>

                                        <h6 className="rol">&#60;&#62; Android Developer</h6>
                                        <p className="companyPlace"><a href="https://timp.pro" target="_blank" rel="noopener noreferrer">Timp.pro</a>, Valencia, Spain - 2015</p>
                                        <p className="rolSummary">Internship. Main responsibilities: Develop and implement new features to the current project timp.pro.
                                        Learn important programming and human skills such as organization and time management
                                        Java was the language used to develop the project but I had the opportunity to research about iOS swift.</p>

                                    </div>

                                    <div>
                                        
                                        <h6 className="rol">&#60;&#62; IT Technician | Web Designer</h6>
                                        <p className="companyPlace"><a href="http://lainmaculada.es" target="_blank" rel="noopener noreferrer">Inmaculada H.S.</a>, Valencia, Spain - 2015</p>
                                        <p className="rolSummary">Internship. Two main responsibilities: Give maintenance to the actual hardware, 
                                        which includes, fix and repair the current PC’s of the college. Design the new website to the college 
                                        because the old one needed a fresh design. Implement new features to the current website until the new one could be released.</p>

                                    </div>

                                </div>


                        </div>

                        {/*** Education ***/}
                        <div className="col s12 tile normalContainer">

                            <div className="col s12 m4 sectionTitle">

                                <h4>Education</h4>

                            </div>

                            <div className="col s12 m8 sectionInfo">

                                <div>

                                    <h6 className="rol">&#60;&#62; BTEC Level 3 Software Development</h6>
                                    <p className="companyPlace"><a href="https://www.gateshead.ac.uk/" target="_blank" rel="noopener noreferrer">Gateshead College</a>, Gateshead, UK - 2018</p>
                                    <p className="rolSummary">Final qualification, DDM (Distinction, Distinction, Merit).
                                        C#, MySQL, HTML5, CSS and JavaScript were the main programming languages.
                                        Final project was to practice all the skills acquired during the year
                                        and create the final documentation to explain the full process of development.</p>

                                </div>

                                <div>

                                    <h6 className="rol">&#60;&#62; GCSE English and High Maths</h6>
                                    <p className="companyPlace"><a href="https://www.gateshead.ac.uk/" target="_blank" rel="noopener noreferrer">Gateshead College</a> Gateshead, UK - 2018</p>
                                    <p className="rolSummary">Final qualification, 4 or C on both subjects. Qualification acquired with the Level 3 course.</p>

                                </div>

                                <div>
                                        
                                    <h6 className="rol">&#60;&#62; Cross-platform Application Development</h6>
                                    <p className="companyPlace"><a href="https://www.floridauniversitaria.es/es-ES/Paginas/FloridaUniversitaria.aspx?Perfil=Florida%20Universitaria" target="_blank" rel="noopener noreferrer">Florida Universitaria</a> Valencia, Spain - 2015</p>
                                    <p className="rolSummary">Java, MySQL, HTML5 CSS, JavaScript, PHP, XML, Web Services, FTP, System Security where the main subjects of this course.</p>

                                </div>

                                <div>
                                        
                                    <h6 className="rol">&#60;&#62; Computer Systems and Networks</h6>
                                    <p className="companyPlace"><a href="https://www.floridauniversitaria.es/es-ES/Paginas/FloridaUniversitaria.aspx?Perfil=Florida%20Universitaria" target="_blank" rel="noopener noreferrer">Florida Universitaria</a> Valencia, Spain - 2013</p>
                                    <p className="rolSummary">Office automation applications, assembly and maintenance of equipment, local networks, operating systems, informatic security, network services where the subjects of this course.</p>

                                </div>

                            </div>


                        </div>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default About
