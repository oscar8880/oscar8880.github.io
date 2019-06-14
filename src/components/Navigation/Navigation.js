import React, {Component} from "react";
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup'
import Jumbotron from 'react-bootstrap/Jumbotron'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

class Navigation extends Component {
    
    render() {
        return (
                <nav className="navbar navbar-default">
                    <div className="container-fluid">
                        <div className="navbar-header">
                        </div>
                        <h4 className="navbar-text">Oscar's Website</h4>
                            <div className="collapse navbar-collapse">
                                <ul className="nav navbar-nav">
                                    <li id="/" className="active"><a href="">Home</a></li>
                                    <li id="/secretsanta"><a href="/secretsanta">Menu 2</a></li>
                                    <li id="/regression"><a href="/regression">Menu 3</a></li>
                                </ul>
                            </div>
                    </div>
                </nav>
            )
    }
}

export default Navigation
