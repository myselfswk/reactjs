import React, { Component } from 'react';
import LifeCycleB from './LifeCycleB';

class LifeCycleA extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: "Muhammad Waleed Khan"
        }
        console.log("LifeCycleA: Constructor");
    }

    static getDerivedStateFromProps(props, state) {
        console.log("LifeCycleA: getDerivedStateFromProps");
        return null;
    }

    componentDidMount() {
        console.log("LifeCycleA: componentDidMount");
    }

    render() {
        console.log("LifeCycleA: Render");

        return (
            <div>
                <h1>Life Cycle A</h1>
                <LifeCycleB></LifeCycleB>
            </div>
        );
    }
}
export default LifeCycleA;