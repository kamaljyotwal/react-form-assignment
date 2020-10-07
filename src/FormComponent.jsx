import React, { Component } from "react";
import "./formContainer.css";

export default class FormComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.changeHandler = this.changeHandler.bind(this);
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  changeHandler(e) {
    const { name, value } = e.target;
    this.setState({
      [name]: value,
    });
    // handleSubmit(){}
  }

  render() {
    return (
      <div className="outerContainer">
        <div className="formContainer">
          <div className="headings">
            <p className="one">Login</p>
            <p className="two">Enter Your Applyance Credentials</p>
          </div>
          <form action="">
            <div className="formGroup">
              <label htmlFor="idEmail">Email</label>
              <br />
              <input
                required
                type="email"
                placeholder="yourname@xyz.com"
                id="idEmail"
                name="username"
                value={this.state.username}
                onChange={this.changeHandler}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="idPassword">Your Password </label>
              <br />
              <input
                required
                type="password"
                placeholder="Password"
                name="password"
                id="idPassword"
                value={this.state.password}
                onChange={this.changeHandler}
              />
            </div>
            <button
            //    onSubmit={this.handleSubmit}
            >
              Log In
            </button>
          </form>
        </div>
      </div>
    );
  }
}
