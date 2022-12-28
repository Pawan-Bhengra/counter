import React, { Component } from "react";
import axios from "axios";
class Newcall extends Component {
  constructor(props) {
    super(props);
    this.state = { user: [], loading: false };
  }
  //   api call using axios in react
  getData() {
    this.setState({
      loading: true,
    });
    axios("https://api.randomuser.me/?nat=US&results=10").then((response) =>
      this.setState({
        user: response.data.results,
        loading: false,
      })
    );
  }

  componentDidMount() {
    this.getData();
  }

  //   map data by map() and used ternary operator to show a loading action till it data recived by getdata() method

  // apply conditional rendering

  render() {
    const { loading, user } = this.state;
    return (
      <div>
        <th>
          <tr>
            <div>
              <hr />
              <hr />
              Fname <hr />
              <hr />
            </div>
            {!loading
              ? user.map((users) => (
                  <div>
                    {users.name.first}

                    <hr />
                  </div>
                ))
              : "loading..."}
          </tr>
        </th>

        <th>
          <tr>
            <div>
              <hr />
              <hr />
              lname
              <hr />
              <hr />
            </div>
            {!loading
              ? user.map((users) => (
                  <div>
                    {users.name.last}
                    <hr />
                  </div>
                ))
              : "loading..."}
          </tr>
        </th>
        <th>
          <tr>
            <div>
              <hr />
              <hr />
              email
              <hr />
              <hr />
            </div>
            {!loading
              ? user.map((users) => (
                  <div>
                    {users.email}
                    <hr />
                  </div>
                ))
              : "loading..."}
          </tr>
        </th>

        <th>
          <tr>
            <div>
              <hr />
              <hr />
              phone
              <hr />
              <hr />
            </div>
            {!loading
              ? user.map((users) => (
                  <div>
                    {users.cell}
                    <hr />
                  </div>
                ))
              : "loading..."}
          </tr>
        </th>

        <th>
          <tr>
            <div>
              <hr />
              <hr />
              country
              <hr />
              <hr />
            </div>
            {!loading
              ? user.map((users) => (
                  <div>
                    {users.nat}
                    <hr />
                  </div>
                ))
              : "loading..."}
          </tr>
        </th>
      </div>
    );
  }
}
export default Newcall;
