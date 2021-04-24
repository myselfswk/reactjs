import React, { Component } from 'react';
import axios from 'axios';

export class PostList extends Component {

    constructor(props) {
        super(props)

        this.state = {
            post: [],
            error: ''
        }
    }

    componentDidMount() {
        axios.get("http://jsonplaceholder.typicode.com/posts")
            .then(Response => {
                this.setState({
                    post: Response.data
                });
                console.log(Response);
            })
            .catch(Error => {
                this.setState({
                    error: 'URL Not Found'
                });
                console.log(Error);
            })
    }

    render() {
        const { post, error } = this.state;
        return (
            <div>
                <h1>List Post Data</h1>
                <h1>Title of the Data:-</h1>
                {
                    post.length ?
                        post.map(posts => {
                            return (
                                <div key={posts.id}>
                                    {posts.title}
                                </div>
                            );
                        })
                        : null
                }
                {
                    error ?
                        <div><h1>{error}</h1></div>
                        : null
                }
            </div>
        )
    }
}

export default PostList;
