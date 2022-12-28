import React from "react";
import { FirstName } from "./Main";
function CompoC() {
  return (
    <div>
      <FirstName.Consumer>
        {(fname) => {
          return <h2>this is inside component C {fname}</h2>;
        }}
      </FirstName.Consumer>
    </div>
  );
}

export default CompoC;
