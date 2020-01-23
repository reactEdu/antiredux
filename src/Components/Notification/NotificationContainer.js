import React, { useState } from "react";
import NotificationPresenter from "./NotificationPresenter";

const NotificationContainer = (props) => {
  let state = useState({});
  return <NotificationPresenter {...props} {...state} />;
};

export default NotificationContainer;
/*
class NotificationContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <NotificationPresenter {...this.props} {...this.state} />;
  }
}

export default NotificationContainer;
*/