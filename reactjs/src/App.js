import React, { useState } from "react";
import Register from "./components/Register";
import Login from "./components/Login";
import Books from "./components/Books";
import "./App.css";

function App() {
  const [token, setToken] = useState("");

  const userLogin = (tok) => {
    setToken(tok);
  };

  return (
    <div className="container">
      <Login userLogin={userLogin} />
      <Register />
      <Books token={token} />
    </div>
  );
}

export default App;
