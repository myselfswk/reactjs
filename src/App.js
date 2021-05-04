import React from "react";
import ClassMouse from "./Component/ClassMouse";
import FunctionalMouse from "./Component/FunctionalMouse";

import './App.css';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <ClassMouse></ClassMouse>
        <FunctionalMouse></FunctionalMouse>
      </div>
    );
  }
}

export default App;
