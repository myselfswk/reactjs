import React, { Component } from 'react'

export default class Form extends Component {

    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            address: ""
        }
    }

    handleUsername = (event) => {
        this.setState({
            username: event.target.value
        })
    }

    handlePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    handleAddress = (event) => {
        this.setState({
            address: event.target.value
        })
    }

    handleSubmit = (event) => {
        alert(`${this.state.username} ${this.state.password} ${this.state.address}`);
        //if you want that your values will remain in text fields, then
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <div>
                    <label>Username: </label>
                    <input type='text' value={this.state.username} onChange={this.handleUsername} />
                </div>
                <div>
                    <label>Passowrd: </label>
                    <input type='password' value={this.state.password} onChange={this.handlePassword} />
                </div>
                <div>
                    <label>Address: </label>
                    <textarea value={this.state.address} onChange={this.handleAddress}></textarea>
                </div>
                <button>Submit</button>
            </form>
        )
    }
}
