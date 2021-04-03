import React, { Component } from 'react';
import CReactFragments from './CReactFragments';
import ReactFragments from './ReactFragments';

class CFunctionClick extends Component {

    constructor(props) {
        super(props);
        //when there is an arrow function, we don't need to bind our this keyword
        //this.changeEvent = this.changeEvent.bind(this);

        this.state = {
            course: "VPL",
            regNo: this.props.regNo
        }
    }

    //no need to write function keyword in class component, you can directly create function
    // changeEvent() {
    //     console.log("Button is Clicked!", this.state.course);
    // }

    //Arrow function
    changeEvent = () => {
        this.setState({
            course: "WPL"
        })
        console.log("Button is Clicked!");
    }

    //if you wanna prevent the default behaviour of any tag to be forcefully ignore, you use e
    changeEventAnchor = (e) => {
        //forecefully ignore the default behaviour of any tag
        e.preventDefault();
        console.log("Hey")
    }
    render() {
        const numbers = this.props.numbers;
        // console.log(numbers);
        //map with normal function
        const newNumbers = numbers.map(function (number) {
            // console.log(number);
            return (
                <li style={{ listStyle: 'none' }} key={number}>{number}</li>
            );
        });

        //map with arrow function
        const arrowNewNumbers = numbers.map((value, index) => {
            return (
                <li style={{ listStyle: 'none' }} key={index}>{value}</li>
            );
        })
        // console.log(newNumbers);
        return (
            <div>
                <button onClick={this.changeEvent}>Click Me By Class Component</button>
                {/* after bind this keyword, you can use state directly in your render method */}
                <p>Course by state: {this.state.course}</p>
                <p>Registration number by props: {this.props.regNo}</p>
                <p>Anchor Tag:</p>
                <a href="https://www.google.com.pk/" onClick={this.changeEventAnchor}>Go To Google</a>
                <ul>With Normal Function{newNumbers}</ul>
                <ul>With Arrow Function{arrowNewNumbers}</ul>
                <p>Numbers directly Access in Return</p>
                <ul>
                    {
                        numbers.map((number) => {
                            return <li style={{ listStyle: 'none' }}>{number}</li>
                        })
                    }
                </ul>
                <ReactFragments />
                <CReactFragments />
            </div>
        );
    }
}

export default CFunctionClick;