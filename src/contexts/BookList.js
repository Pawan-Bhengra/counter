import React, { Component } from "react";
import { ThemeContext } from "./ThemContext";

export default class BookList extends Component {
  static contextType = ThemeContext;
  render() {
    return (
      <ThemeContext.Consumer>
        {(context) => {
          const { isLightTheme, light, dark } = context;
          const Theme = isLightTheme ? light : dark;
          return (
            <div
              className="booklist"
              style={{ background: Theme.bg, color: Theme.texts }}
            >
              <ul>
                <li style={{ background: Theme.ui }}>book 1</li>
                <li style={{ background: Theme.ui }}>book 2</li>
                <li style={{ background: Theme.ui }}>book 3</li>
              </ul>
            </div>
          );
        }}
      </ThemeContext.Consumer>
    );
  }
}
