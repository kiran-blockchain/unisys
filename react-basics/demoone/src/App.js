import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import ButtonComponent from "./button";
import TextBoxComponent from "./textComponent";

export default class App extends Component {
  constructor() {
    super();
    this.state ={
      firstname:"",
      lastname:""
    }
  }
  userClick = data => {
    alert(data);
  };
  handleChange = e => {
     let obj = this.state;
     obj[e.target.name]= e.target.value
    this.setState(obj);
    console.log(this.state);
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <TextBoxComponent
          name={"firstname"}
          placeholder={"First Name"}
          handleChange={this.handleChange}
          value ={this.state.firstname}
        />{this.state.firstname}
          <TextBoxComponent
          name={"lastname"}
          placeholder={"Last Name"}
          handleChange={this.handleChange}
          value ={this.state.lastname}
        />
        <ButtonComponent displayText={"Click Me"} userClick={this.userClick} />
      </div>
    );
  }
}
