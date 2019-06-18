import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar'
import Sidebar from './components/Sidebar/Sidebar'
import Introduction from './components/Introduction/Introduction'

class App extends Component {
  render() {
    return (
        <div id="colorlib-page">
            <div id="container-wrap">
                <Sidebar></Sidebar>
                    <div id="colorlib-main">
                        <Introduction></Introduction>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
