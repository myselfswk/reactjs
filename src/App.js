import React from "react";

import './App.css';
import HookCounter from "./Component/HookCounter";

class App extends React.Component {
  render() {
    return (
      <div className="App">
      <HookCounter></HookCounter>
      </div>
    );
  }
}

export default App;
