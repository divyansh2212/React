import React, { createContext, useEffect, useState } from "react";
import B from './B';

const A = () => {

    const [num, setNum] = useState(0);
    const [flag, setFlag] = useState(false);

    useEffect(() => {
        flag ?
            (document.title = `You clicked me ${num} time`) : setFlag(true);
    })

    return (
        <>
            <button onClick={() => {
                setNum(num + 1)
            }} >click me {num}</button>
            <br />
            <B />
        </>
    )
}

export default A;