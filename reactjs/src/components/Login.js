import React, { Component } from "react";

export default class Login extends Component {
  state = {
    credentials: { username: "", password: "" },
  };

  login = (e) => {
    const url = "http://127.0.0.1:8000/api/auth/";

    fetch(url, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(this.state.credentials),
    })
      .then((data) => data.json())
      .then((data) => {
        this.props.userLogin(data.token);
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
      <div id="login">
        <div className="form">
          <div className="header">
            <h1>Login Form</h1>
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
            <button onClick={this.login}>Login</button>
          </div>
          <p>
            I don't have an account{" "}
            <button
              onClick={this.goToRegister}
              style={{
                margin: "1rem",
                padding: ".8rem",
                backgroundColor: "transparent",
                border: "2px solid black",
              }}
            >
              Register
            </button>
          </p>
        </div>
      </div>
    );
  }
}
