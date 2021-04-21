import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route
} from "react-router-dom";

export default function Routing() {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/'>Home</Link>
                        </li>
                        <li>
                            <Link to='/about'>About</Link>
                        </li>
                        <li>
                            <Link to='/users'>Users</Link>
                        </li>
                    </ul>
                </nav>
            </div>

            <Switch>
                <Route path='/about'>
                    <About></About>
                </Route>
                <Route path='/users'>
                    <Users></Users>
                </Route>
                <Route path="/">
                    <Home></Home>
                </Route>
            </Switch>
        </Router>
    )
}

//Creating multiple components for switching
function Home() {
    return <h1>Home Component</h1>
}

function About() {
    return <h1>About Component</h1>
}

function Users() {
    return <h1>Users Component</h1>
}