import React from "react";
import PostList from "./Component/PostList";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <PostList></PostList>
      </div>
    );
  }
}

export default App;
