import React, { useContext } from "react";
import Header from "Components/Header";
import Flex from "styled-flex-component";
import Notification from "Components/Notification";
import Store from "store";

const AppPresenter = () => {
  const store = useContext(Store);
  // console.log(store)
  return (
    <>
      <Header />
      <Flex alignCenter full column>
          {
            Object.keys(store.notifications).map(key => {
              return <Notification 
                key={store.notifications[key].id}
                id={store.notifications[key].id}
                text={store.notifications[key].text} 
                seen={store.notifications[key].seen} />
            })
          }
      </Flex>
    </>
  )
};

export default AppPresenter;