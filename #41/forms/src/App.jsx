import React, { useState } from "react";
// import AddIcon from '@mui/icons-material/Add';

const App = () => {

    const [counter, setCounter] = useState(0);

    const increase = () => {
        setCounter(counter + 1);
    }
    const decrease = () => {
        if (counter - 1 < 0) {
            alert("Reached 0")
        }
        else
            setCounter(counter - 1);
    }

    return <>
        <div className="main_div">
            <h1>{counter}</h1>
            <div className="button_div">
                <button onClick={increase}>AddIcon</button>
                <button onClick={decrease}>Decrease</button>
            </div>
        </div>
    </>
}

export default App