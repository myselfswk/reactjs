import React, { Component } from 'react';

class ClassCounterOne extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0,
            name: ''
        }
    }

    componentDidMount() {
        document.title = `Clicked ${this.state.count} Times`;
    }

    componentDidUpdate(prevProps, prevState) {
        // console.log(prevProps, prevState);
        console.log("Previous State: ", prevState.count);
        console.log("Current State: ", this.state.count);
        if (prevState.count !== this.state.count) {
            console.log("Testing......");
            document.title = `Clicked ${this.state.count} Times`;
        }
    }

    ChangeCounter = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <div>
                <input value={this.state.name} onChange={e => { this.setState({ name: e.target.value }) }} />
                <button onClick={this.ChangeCounter}>Counter Update {this.state.count}</button>
            </div>
        );
    }
}

export default ClassCounterOne;