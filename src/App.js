import React, { Component } from "react";
import Counter from "./componenet/Counter";
import StopWatch from "./componenet/StopWatch";
import Newcall from "./componenet/Newcall";
import NewCounter from "./componenet/NewCounter";
import News from "./componenet/News";

import Main from "./contextAPI/Main";

import NavBar from "./contexts/NavBar";
import BookList from "./contexts/BookList";
import ThememContextProvider from "./contexts/ThemContext";
import ToggleTheme from "./contexts/ToggleTheme";

class App extends Component {

  
  render() {
    return (
      <div className="App">
        {/* <Counter/> */}
        {/* <StopWatch /> */}
        {/* <Newcall/> */}
        {/* <NewCounter /> */}
        {/* <News/> */}
        {/* <Main/> */}

        <ThememContextProvider>
          <NavBar />
          <BookList />
          <ToggleTheme/>
        </ThememContextProvider>
      </div>
    );
  }
}

export default App;
