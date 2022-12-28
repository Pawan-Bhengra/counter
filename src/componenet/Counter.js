import React, { Component } from "react";
import "../App.css";
class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      sCount: 0,
      userIncr: undefined,
      userDecr: undefined,
    };
  }

  onIncrement = () => {
    this.setState((prevstate) => ({
      count: prevstate.count + parseFloat(this.state.userIncr),
      // sCount: prevstate.count -2,
    }));
    // this.setState((prevstate) => ({
    //   sCount: prevstate.count - 2,
    // }));
  };

  onDecrement = () => {
    if (this.state.count > 1) {
      this.setState((prevstate) => ({
        count: prevstate.count - parseFloat(this.state.userDecr),
      }));
    }
  };

  userChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  onClear = () => {
    this.setState({ count: 0 });
  };

  componentDidMount = () => {
    // this.timeSet = setTimeout(() => {
    //   this.changeCount();
    // }, 2000);
  };

  componentDidUpdate(prevprops, prevstate, snapshort) {
    console.log("call count", prevstate.count);
    console.log("call scount", prevstate.sCount);

    prevstate.sCount = {
      sCount: prevstate.count - 1,
    };

    if (prevstate.sCount <= 0) {
      this.setState({
        sCount: prevstate.sCount,
      });
    }

    console.log("sCount", prevstate.sCount.sCount);
    console.log("call ", prevstate);
  }

  changeCount = () => {
    this.setState({ count: 2 });
  };

  // changeScount(){
  //   this.setState((prevstate) => ({
  //     sCount: prevstate.count - 2,
  //   }));
  // }

  render() {
    const { count, userIncr, userDecr, sCount } = this.state;

    return (
      <div className="App">
        <div className="App-header">
          <div className="container">
            <fieldset>
              {/* input increment */}
              <legend>Increment Value</legend>
              <input
                className="input"
                type="number"
                placeholder="Increment Value"
                name="userIncr"
                value={userIncr}
                onChange={this.userChange}
              />
            </fieldset>

            {/* input decrement */}

            <fieldset>
              <legend>Decrement Value</legend>
              <input
                className="input"
                type="number"
                placeholder="Decrement Value"
                name="userDecr"
                value={userDecr}
                onChange={this.userChange}
              />
            </fieldset>
          </div>

          <div className="in-counter">
            <div className="display-style">{count}</div>

            {/* counters buttons */}
            {/* <div>{this.state.counter}</div>
              <button onClick={()=>{this.setState({counter: this.state.counter+1})}}>update counter </button> */}
            {/* inctrement counter */}
            <div>
              <div>
                <button
                  type="button"
                  onClick={this.onIncrement}
                  className="button-style"
                >
                  Increment
                </button>

                {/* decrement button */}

                <button onClick={this.onDecrement} className="button-style">
                  Decrement
                </button>

                {/* clear button */}

                <button onClick={this.onClear} className="button-style">
                  clear
                </button>
              </div>
            </div>
          </div>

          {/* second display count */}
          <div className="display-style">{sCount}</div>
        </div>
      </div>
    );
  }
}

export default Counter;
