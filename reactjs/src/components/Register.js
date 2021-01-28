import React, { Component } from "react";

export default class Register extends Component {
  state = {
    credentials: { username: "", email: "", password: "" },
  };

  register = (e) => {
    const url = "http://127.0.0.1:8000/api/create-user/";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error(error);
      });
  };

  inputChanged = (e) => {
    const cred = this.state.credentials;

    cred[e.target.name] = e.target.value;
    this.setState({ credentials: cred });
  };

  render() {
    return (
      <div className="form" id="register">
        <div className="header">
          <h1>Register Form</h1>
        </div>
        <div className="body">
          <label>
            Username:&nbsp;
            <input
              type="text"
              name="username"
              value={this.state.credentials.username}
              onChange={this.inputChanged}
            />
          </label>

          <label>
            Email:&nbsp;
            <input
              type="email"
              name="email"
              value={this.state.credentials.password}
              onChange={this.inputChanged}
            />
          </label>

          <label>
            Password:&nbsp;
            <input
              type="password"
              name="password"
              value={this.state.credentials.password}
              onChange={this.inputChanged}
            />
          </label>
        </div>
        <div className="footer">
          <button onClick={this.register}>Register</button>
        </div>
      </div>
    );
  }
}
