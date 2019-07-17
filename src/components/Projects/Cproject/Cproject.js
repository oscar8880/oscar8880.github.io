import React, { Component } from 'react'

export default class Cproject extends Component {
    constructor(props) {
        super(props);

        this.state = {
            display: false
        };

        this.toggleDisplay = this.toggleDisplay.bind(this);
      }

    toggleDisplay() {
        const newDisplay = this.state.display == false ? true : false;
        this.setState({display: newDisplay});
    }
    
    render() {

        const styleChange = this.state.display ? {} : {display: 'none'};

        return (
                <div>
                    <button onClick={this.toggleDisplay}>
                        View and run code on Repl.it
                    </button>
                    <div style={styleChange}>
                        <iframe height="750px" width="100%" src="https://repl.it/@oscar8880/Multiple-Linear-Regression?lite=true" scrolling="no" frameBorder="no" allowTransparency="true" allowFullScreen="true" sandbox="allow-forms allow-pointer-lock allow-popups allow-same-origin allow-scripts allow-modals" />
                    </div>
                </div>
              );
          
    }
}
