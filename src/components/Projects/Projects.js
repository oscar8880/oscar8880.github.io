import React, { Component } from 'react'
import Cproject from './Cproject/Cproject'

export default class Projects extends Component {
    render() {
        return (
                <div>
                    <section className="colorlib-about" data-section="projects">
                    <div className="colorlib-narrow-content">
                        <div className="row">
                            <div className="col-md-12">
                                <div className="about-desc">
                                    <h2 className="colorlib-heading">Projects</h2>
                                    <div className="timeline-centered">
                                        <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                            <div className="timeline-entry-inner">
                                                <div className="timeline-icon color-1">
                                                    <i className="icon-chart-line"></i>
                                                </div>
                                                <div className="timeline-label">
                                                    <h2><a href="https://github.com/oscar8880/Multiple-Linear-Regression" target ="_blank">Multiple Linear Regression</a>
                                                    <br></br>
                                                    <span>A tool for econometric analysis, written in C</span>
                                                    
                                                    </h2>
                                                    <p><strong>Background</strong>: Multiple linear regression is a statistical technique for analysing the linear relationships between a 'dependent' variable and several 'explanatory' variables. For instance, in the field of economics MLR models may be used to help understand relationships between economic growth, interest rates and unemployment.</p>
                                                    <p><strong>How does this tool work?</strong>: The program takes a .txt file of sample data and reads the data into mathematical matrices (implemented as a C struct). Using the Ordinary Least Squares (OLS) method, an equation is generated which describes the relationship between the first variable in the data file, and the remaining variables. Model statistics are then calculated to determine the significance and accuracy of this relationship.</p>
                                                    <a href="https://github.com/oscar8880/Multiple-Linear-Regression" target ="_blank">View on Github</a>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="timeline-entry animate-box fadeInLeft animated" data-animate-effect="fadeInLeft">
                                            <div className="timeline-entry-inner">
                                                <div className="timeline-icon color-3">
                                                    <i className="icon-chart-line"></i>
                                                </div>
                                                <div className="timeline-label">
                                                    <h2><a href="https://github.com/oscar8880/site-project" target ="_blank">Portfolio Website</a>
                                                    <br></br>
                                                    <span>A portfolio site built as a React Web App</span>
                                                    </h2>
                                                    <p>As part of a foray into web development I built the site you're looking at right now. The site is a React Web App, built using NPM and deployed onto Github Pages. Credit to Colorlib for the site template.</p>
                                                    <a href="https://github.com/oscar8880/site-project" target ="_blank">View on Github</a>
                                                </div>
                                            </div>
                                        </article>
                                        <article className="timeline-entry begin animate-box fadeInUp animated" data-animate-effect="fadeInBottom">
                                            <div className="timeline-entry-inner">
                                                <div className="timeline-icon color-none">
                                                </div>
                                            </div>
                                        </article>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    </section>
                </div>
                )
    }
}
