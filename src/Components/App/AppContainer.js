import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  // Provider에 추가하고 싶은 함수는 constructor 내부에 존재해야함
  // 인스턴스가 생성되었을때 Store가 value를 얻기때문
  constructor(props) {
    super(props);
    // 알림 삭제
    this._deleteNotification = (id) => {
      this.setState(currentState => {
        const newState = delete currentState.notifications[id];
        return newState;
      });
    }
    // 알림 봤음(확인함)
    this._seeNotification = (id) => {
      console.log(this.state.notifications[id].seen)
      this.setState((currentState) => { 
        return { 
          ...currentState,
          notifications: {
            ...currentState.notifications,
            [id] : {
              ...currentState.notifications[id],
              seen: true
            }
          }
        }
      });
    }
    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "Something",
          seen :false
        },
        "2": {
          id: 2,
          text: "Something else",
          seen :false
        },
        "3": {
          id: 3,
          text: "Something else but different",
          seen :false
        },
      },
      deleteNotification: this._deleteNotification,
      seeNotification: this._seeNotification,
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
