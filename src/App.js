import React, { Component } from 'react';
import './App.css';
import Sidebar from './components/Sidebar/Sidebar'
import Introduction from './components/Introduction/Introduction'
import About from './components/About/About'

class App extends Component {
  render() {
    return (
        <div id="colorlib-page">
            <div id="container-wrap">
                <Sidebar></Sidebar>
                    <div id="colorlib-main">
                        <Introduction></Introduction>
                        <About></About>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
