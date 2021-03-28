import React, { Component } from 'react';

class Channel extends Component {
    constructor(){
        super();

        this.state = {
            name: "Waleed Khan",
            age: 21,
        }
    }

    //function that can change the state by setstate
    changeState = () => {
        this.setState ({
            name: "Muhammad Waleed Khan"
        });
    }

    render() {
        return (
            <div>
                <p>class component from Channel file By {this.state.name}</p>
                <button onClick={() => this.changeState()}>Change Name</button>
            </div>
        );
    }
}

export default Channel;