import React, { Component } from "react";
import { ThemeContext } from "./ThemContext";

// toggleTheme class toggle the value of isLightTheme to true or false on click event
export default class ToggleTheme extends Component {
  // through this component can consume data provided by provider
  static contextType = ThemeContext;
  render() {
    return (
      // consume context ThemeContext for onclick button change event
      <ThemeContext.Consumer>
        {(context) => {
          // destructring of toggleTheme
          const { toggleTheme } = context;
          return (
            <div>
              {/* on click event it calls the method toggleTheme from Themcontext to change the state of isLightTheme **/}
              <button onClick={toggleTheme}>Change </button>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
