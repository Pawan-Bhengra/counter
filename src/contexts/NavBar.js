import React, { Component } from "react";
import { ThemeContext } from "./ThemContext";

export default class Context extends Component {
  // to consume context `ThemeContext` static contextType is use
  static contextType = ThemeContext;
  render() {
    
    return (
      
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const Theme = isLightTheme ? light : dark;
          return (
            <nav
              style={{
                background: Theme.bg,
                color: Theme.texts,
                font: Theme.ui,
              }}
            >
              <h1>Context</h1>
              <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact Us</li>
              </ul>
            </nav>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
