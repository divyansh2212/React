import React, { useState } from "react";

const App = () => {

    let bodyBgcolor = "pink"
    let buttonBgcolor = "#34495e"
    let text = "Enter here to see the magic!"

    const [bodybg, setBg] = useState(bodyBgcolor)
    const [buttonBg, setbuttonBg] = useState(buttonBgcolor)
    const [buttontext, setbuttontext] = useState(text)

    const change = () => {
        if (bodybg === "#34495e") {
            setBg("pink")
            setbuttonBg("#34495e")
        }
        else {
            setBg("#34495e")
            setbuttonBg("pink")
        }
        setbuttontext("BOOM!")
    }

    const setNormal = () => {
        setbuttontext(text)
    }

    return (
        <>
            <div style={{ backgroundColor: bodybg }}>
                <button onMouseEnter={change} onMouseLeave={setNormal} style={{ backgroundColor: buttonBg }}>{buttontext}</button>
            </div>
        </>
    );
}

export default App;