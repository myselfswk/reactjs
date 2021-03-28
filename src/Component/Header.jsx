import React from "react";

//there are multiple ways that we can create functional component
// function Header() {
//     return (
//         <div>
//             <h1>Header by Functional Component</h1>
//         </div>
//     );
// }

// const Header = function() {
//     return (
//         <div>
//             <h1>Header by Functional Component</h1>
//         </div>
//     );
// }

// Arrow Function
export const Header = (props) => {
    console.log(props)
    return (
        <div>
            <h1>Header by Functional Component({props.name} - {props.lastName})</h1>
            {props.children}
        </div>
    );
}
