import React, { Component, createContext } from "react";

const ThemeContext = createContext();
class ThememContextProvider extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isLightTheme: true,
      light: { texts: "brown", ui: "#eee", bg: "lavender" },
      dark: { texts: "white", ui: "grey", bg: "black" },
    };
  }

  //   toggleTheme method changes the property of isLightTheme on click event
  toggleTheme = () => {
    this.setState({ isLightTheme: !this.state.isLightTheme });
  };
  render() {
    return (
      <div>
        {/* toggle theme is passed to the value of context provider */}
        <ThemeContext.Provider
          value={{ ...this.state, toggleTheme: this.toggleTheme }}
        >
          {this.props.children}
          
        </ThemeContext.Provider>
      </div>
    );
  }
}
export default ThememContextProvider;
export { ThemeContext };
