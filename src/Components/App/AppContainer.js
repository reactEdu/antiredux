import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  // Provider에 추가하고 싶은 함수는 constructor 내부에 존재해야함
  // 인스턴스가 생성되었을때 Store가 value를 얻기때문
  constructor(props) {
    super(props);
    this._changeMessage = () => {
      if(this.state.messgage === "Hello") {
        this.setState({
          messgage: "Bye Bye"
        });
      } else {
        this.setState({
          messgage: "Hello"
        });
      }
    }
    this.state = {
      messgage: "Hello",
      changeMessage: this._changeMessage
    }
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
