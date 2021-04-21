import React, { Component } from 'react';

class LifeCycleB extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Muhammad Waleed Khan"
        }
        console.log("LifeCycleB: Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleB: getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleB: componentDidMount");
    }

    render() {
        console.log("LifeCycleB: Render");

        return (
            <div>
                <h1>Life Cycle B</h1>
            </div>
        );
    }
}
export default LifeCycleB;