import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  state = {
    messgage: "Hello"
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({
        messgage: "Bye"
      })
    }, 2000)
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
