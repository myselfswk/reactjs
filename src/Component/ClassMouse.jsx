import React, { Component } from 'react';

class ClassMouse extends Component {
    constructor(props) {
        super(props);

        this.state = {
            X: 0,
            Y: 0
        }
    }

    logMousePosition = e => {
        this.setState({
            X: e.clientX,
            Y: e.clientY
        })
    }

    componentDidMount() {
        console.log("Mounting");
        window.addEventListener('mousemove', this.logMousePosition);
    }

    render() {
        return (
            <div>
                <p>X - {this.state.X} Y - {this.state.Y}</p>
            </div>
        );
    }
}

export default ClassMouse;