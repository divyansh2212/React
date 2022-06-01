import React, { useState } from "react";

const App = () => {

    const [fullName, setFullName] = useState({
        fname: "", lname: ""
    })

    const onSubmits = (event) => {
        event.preventDefault();
    }

    const func = (event) => {
        const value = event.target.value;
        const name = event.target.name

        setFullName((prev) => {
            if (name === 'fname') {
                return {
                    fname: value,
                    lname: prev.lname
                }
            }
            else if (name === 'lname') {
                return {
                    lname: value,
                    fname: prev.fname
                }
            }
        })
    }

    return (<>
        <form onSubmit={onSubmits}>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <input placeholder="Enter your first name" type="text" name="fname" onChange={func} value={fullName.fname}></input>
            <input placeholder="Enter your last name" type="text" name="lname" onChange={func} value={fullName.lname}></input>
            <button type="submit">Submit</button>
        </form>

    </>)
}

export default App