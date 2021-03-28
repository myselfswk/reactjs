import React from "react";

class Footer extends React.Component {

    state = {
        users: [
            {id: 1, name:"Waleed Khan", Course: "ReactJS"},
            {id: 2, name:"Huzaifa Khan", Course: "Flutter"},
            {id: 3, name:"Daniyal Kaleem", Course: "React Native"},
            {id: 4, name:"Osama Khan", Course: "JavaScript"},
        ]
    }
    render() {
        // console.log(this.state.users);
        //if you wanna access a particular user from state, than
        // console.log(this.state.users[0]);
        //if you want any specific value like id and name, than
        // console.log(this.state.users[0].id);

        const users = this.state.users.map((users, index) => {
            return (
                <div key={index}>
                    <h1>{users.id}</h1>
                    <h2>{users.name}</h2>
                    <h3>{users.Course}</h3>
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