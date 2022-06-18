import React, { createContext } from "react";
import A from "./A";

const firstName = createContext();
const lastName = createContext()

const App = () => {


  return (
    <>
      <lastName.Provider value="Mittal">
      <firstName.Provider value="Divyansh">
        <A />
      </firstName.Provider>
      </lastName.Provider>
    </>
  )
}

export default App;

export {firstName, lastName};