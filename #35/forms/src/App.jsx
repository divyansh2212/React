import React, { useState } from "react";

const App = () => {

    const [name, changeName] = useState("");
    const [fullName, changeFullName] = useState("");
    const [lastname, setLastName] = useState("");

    const func1 = (event) => {
        changeName(event.target.value);
    }

    const func2 = (event) => {
        setLastName(event.target.value)
    }

    const onSubmits = (event) => {
        event.preventDefault()
        changeFullName(name + " " + lastname)
    }

    return <>
        <div>
            <form onSubmit={onSubmits}>
                <h1>Hello {fullName}</h1>

                <input type="text" placeholder="Enter your first name" onChange={func1} value={name}></input>

                <input type="text" placeholder="Enter your last name" onChange={func2} value={lastname}></input>

                <button type="submit">Submit</button>
            </form>
        </div>
    </>
}

export default App;