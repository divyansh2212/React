import React, { useState } from "react";

const App = () => {

    const [name, changeName] = useState("");
    const [fullName, changeFullName] = useState("");

    const func = (event) => {
        changeName(event.target.value);
    }

    const onSubmits = () => {
        changeFullName(name)
    }

    return <>
        <div>
            <h1>Hello {fullName}</h1>
            <input type="text" placeholder="Enter your name" onChange={func} value={name}></input>
            <button onClick={onSubmits}>Submit</button>
        </div>
    </>
}

export default App;