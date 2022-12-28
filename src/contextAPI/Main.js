import React from "react";
import { createContext, useState } from "react";
import CompoA from "./CompoA";

const FirstName = createContext();

function Main() {
    const [Theme, setTheme] = useState()
    
  return (
    <div>
      <FirstName.Provider value={"- Name is from Main component"}>
        <CompoA />
      </FirstName.Provider>
    </div>
  );
}

export default Main;
export { FirstName };
