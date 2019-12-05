import Navigator from "./navigation/Navigator";
import React, { Component } from "react";
import Orientation, { orientation } from "react-native-orientation";


export default class App extends Component {
  componentDidMount = () => {
    Orientation.lockToPortrait();
  };

  render() {
    return <Navigator />;
  }
}
