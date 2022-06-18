import React, { createContext, useContext } from "react";
import { firstName, lastName } from "./App";

// const C = () => {
//     return (
//         <>
//             <lastName.Consumer>
//                 {(lname) => {
//                     return (<firstName.Consumer>
//                         {(fname) => {
//                             return (<h1>{fname} {lname}</h1>)
//                         }}
//                     </firstName.Consumer>)
//                 }}
//             </lastName.Consumer>
//         </>
//     );
// }


const C = () => {
    const fname = useContext(firstName);
    const lname = useContext(lastName)
    return (
        <>
            <h1>{fname} {lname}</h1>
        </>
    )
}

export default C;