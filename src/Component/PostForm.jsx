import React, { Component } from 'react';
import axios from 'axios'

export default class PostForm extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userid: '',
            title: '',
            body: ''
        }
    }

    changeHandler = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //this is used to stop loading page
        console.log(this.state);
        axios.get("http://jsonplaceholder.typicode.com/posts", this.state)
            .then(Response => {
                console.log(Response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { userid, title, body } = this.state;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <div>
                        <label>User ID: </label>
                        <input type="text" name="userid" value={userid} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Title: </label>
                        <input type="text" name="title" value={title} onChange={this.changeHandler} />
                    </div>
                    <div>
                        <label>Body: </label>
                        <input type="text" name="body" value={body} onChange={this.changeHandler} />
                    </div>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}
