import React from "react";
import Testing from "./Testing";

class Footer extends React.Component {

    state = {
        users: [
            { id: 1, name: "Waleed Khan", Course: "ReactJS" },
            { id: 2, name: "Huzaifa Khan", Course: "Flutter" },
            { id: 3, name: "Daniyal Kaleem", Course: "React Native" },
            { id: 4, name: "Osama Khan", Course: "JavaScript" },
        ]
    }
    render() {
        // console.log(this.state.users);
        //if you wanna access a particular user from state, than
        // console.log(this.state.users[0]);
        //if you want any specific value like id and name, than
        // console.log(this.state.users[0].id);

        const users = this.state.users.map((users) => {
            return (
                <div key={users.id}>
                    <h1>{users.id}</h1>
                    <h2>{users.name}</h2>
                    <h3>{users.Course}</h3>
                    {/* we can't use key as props, so we create new props name value and access to
                        other component */}
                    <Testing key={users.id} value={users.id}></Testing>
                </div>
            );
        });

        return (
            <div>
                {users}
                <h1>Footer By Class Component({this.props.name} - {this.props.lastName})</h1>
            </div>
        );
    }
}

export default Footer;