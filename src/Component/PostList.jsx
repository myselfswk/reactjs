import React, { Component } from 'react';
import axios from 'axios';

export class PostList extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             post: []
        }
    }

    componentDidMount(){
        axios.get("http://jsonplaceholder.typicode.com/posts")
        .then(Response => {
            console.log(Response);
        })
        .catch(Error => {
            console.log(Error);
        })
    }
    
    render() {
        return (
            <div>
                <h1>List Post Data</h1>
            </div>
        )
    }
}

export default PostList;
