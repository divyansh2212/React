import React, { useState } from "react";

const App = () => {

    const [count, setCount] = useState(0);

    const [ctime, setcTime] = useState(new Date().toLocaleTimeString());

    const IncNum = () => setCount(count + 1);

    const DecNum = () => {
        if (count > 0)
            setCount(count - 1);
    }

    const Refresh = () => {
        setcTime(new Date().toLocaleTimeString());
    }

    setInterval(Refresh, 1000)

    return (
        <>
            <h1>{ctime}</h1>
            <h1>{count}</h1>
            <div className="btndiv">
                <button className="btn" onClick={IncNum}>Increase</button>
                <button className="btn" onClick={DecNum}>Decrease</button>
                <button className="btn" onClick={Refresh}>Refresh Time</button>
            </div>
        </>
    );

}

export default App;