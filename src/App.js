import React from "react";
import { Header } from "./Component/Header";
import Footer from "./Component/Footer";

import './App.css';
import Channel from "./Component/Channel";
import FFunctionClick from "./Component/FFunctionClick";
import CFunctionClick from "./Component/CFunctionClick";

const name = <span>WALEED KHAN</span>;

//Element without JSX
const newElement = React.createElement("h2", { className: "newElement" }, 'New Element Without JSX');

//Normal Function
const alertName = function () {
  alert("Waleed Khan");
}

//Arrow Function
const alertNameTwo = () => {
  alert("Muhammad Waleed Khan By Arrow Function")
}

//function that checks age
const age = (a) => {
  if (a > 18) {
    return <span>You are Eligible</span>
  } else {
    return <span>You aren't Eligible</span>
  }
}

// Functional Component
// function App() {
//   return (
//     <div className="App">
//       {/* <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Learn reactjs with Muhammad Waleed Khan
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header> */}
//       <h1>Hello By {name}</h1>
//       {newElement}
//       <button onClick={alertName}>Normal Function</button>
//       <button onClick={alertNameTwo}>Arrow Function</button>
//       {age(19)}
//     </div>
//   );
// }

class App extends React.Component {
  render() {
    const numbers = [2, 3, 4, 5, 6];
    return (
      <div className="App">
        <Header name="Waleed" lastName="Khan">
          <p>Waleed is a Good Boy</p>
        </Header>

        <h1>Hello By {name}</h1>
        {newElement}
        <button onClick={alertName}>Normal Function</button>
        <button onClick={alertNameTwo}>Arrow Function</button>
        <p>{age(19)}</p>
        <Channel />
        <FFunctionClick />
        <CFunctionClick regNo="42453" numbers={numbers} />
        <Footer name="Waleed" lastName="Khan" />
      </div>
    );
  }
}

export default App;
