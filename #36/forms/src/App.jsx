import React, { useState } from "react";

const App = () => {

    const [fullName, setFullName] = useState({
        fname: "", lname: "", email: "", phone: ""
    })

    const onSubmits = (event) => {
        event.preventDefault();
    }

    const func = (event) => {
        const value = event.target.value;
        const name = event.target.name

        setFullName((prev) => {
            return {
                ...prev,
                [name]: value
            }
        })

        // setFullName((prev) => {
        //     if (name === 'fname') {
        //         return {
        //             fname: value,
        //             lname: prev.lname,
        //             email: prev.email,
        //             phone: prev.phone
        //         }
        //     }
        //     else if (name === 'lname') {
        //         return {
        //             lname: value,
        //             fname: prev.fname,
        //             email: prev.email,
        //             phone: prev.phone
        //         }
        //     }
        //     else if (name === 'email') {
        //         return {
        //             email: value,
        //             fname: prev.fname,
        //             lname: prev.lname,
        //             phone: prev.phone
        //         }
        //     }
        //     else if (name === 'phone') {
        //         return {
        //             phone: value,
        //             lname: prev.lname,
        //             fname: prev.fname,
        //             email: prev.email
        //         }
        //     }
        // })
    }

    return (<>
        <form onSubmit={onSubmits}>
            <h1>Hello {fullName.fname} {fullName.lname}</h1>
            <div>{fullName.email}</div>
            <div>{fullName.phone}</div>

            <input placeholder="Enter your first name" type="text" name="fname" onChange={func} value={fullName.fname}></input>
            <input placeholder="Enter your last name" type="text" name="lname" onChange={func} value={fullName.lname}></input>
            <input placeholder="Enter your email" type="email" name="email" onChange={func} value={fullName.email}></input>
            <input placeholder="Enter your phone number" type="number" name="phone" onChange={func} value={fullName.phone}></input>

            <button type="submit">Submit</button>
        </form>

    </>)
}

export default App