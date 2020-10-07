import React from "react";
import FormComponent from "./FormComponent";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={require("./logo.png")} alt="" className="logo" />
        <div className="buttonContainer">
          <a className="aLink">New to Applylance?</a>
          <a className="signupButton ">Sign Up</a>
        </div>
      </header>
      <FormComponent />
    </div>
  );
}

export default App;
