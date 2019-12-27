import React, { useState } from "react";
import HeaderPresenter from "./HeaderPresenter";

const HeaderContainer = () => {
  let propTypes = {};
  let state = useState({});

  return <HeaderPresenter {...state} />;
};

export default HeaderContainer;

/*
class HeaderContainer extends Component {
  static propTypes = {};
  state = {};
  render() {
    return <HeaderPresenter {...this.state} />;
  }
}
export default HeaderContainer;
*/