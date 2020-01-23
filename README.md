# Context API와 typography, styled-component 사용
- https://github.com/nomadcoders/antiredux

## 설치
- yarn add styled-components styled-reset styled-flex-component 
- yarn add typography react-fontawesome

## .env파일 생성
- NODE_PATH=src
- 위와 같이 적으면 컴포넌트 위치가 src 기준으로 바뀐다.

```javascript
// import Store from '../../store';
import Store from 'store';
```

## 강의 다 듣고 최신 버젼 내용으로 리팩토링함
### styled component ver4 문법으로 기술
- injectGlobal -> createGlobalStyle

### Hooks 사용
- 기존 class 컴포넌트들 function 컴포넌트로 변경
- context API 부분도 useContext로 바꾸기


## 필기

## Provider(공급자)
- value속성에 공급하고 싶은 값들을 대입
- value에 대입된 값은 Consumer에서 첫번째 객체로 바로 사용 가능하다.

```javascript
class AppContainer extends Component {
  state = {
    messgage: "Hello"
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}
```

## Consumer(소비자)
- Consumer 안에 올수 있는건 함수뿐이다.
- 함수의 매개변수로 받는 객체가 Provider에서 보낸 value 다

```xml
<Store.Consumer>
  {store => store}
</Store.Consumer>
```

## Provider에 함수 추가 하기
- Provider에 추가하고 싶은 함수는 constructor 내부에 존재해야함
- 인스턴스가 생성되었을때 Store가 value를 얻기때문
- 데이터가 객체여도 숫자키가 있다면 Object.keys()를 이용해서 반복구현 가능

```javascript
class AppContainer extends Component {
  constructor(props) {
    super(props);
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
      }
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

// Provider에 저장된 notifications을 가져와 컴포넌트 반복 생성
const AppPresenter = () => (
  <>
    <Header />
    <Flex alignCenter full column>
      <Store.Consumer>
        {store => {
          return Object.keys(store.notifications).map(key => {
            return <Notification 
              key={store.notifications[key].id}
              id={store.notifications[key].id}
              text={store.notifications[key].text} 
              seen={store.notifications[key].seen} />
          });
        }}
      </Store.Consumer>
    </Flex>
  </>
);

const NotificationPresenter = ({ id, text, seen }) => (
  <Notification seen={seen}>
    <Flex alignCenter justifyBetween>
      <Title>{text}</Title>

      ...생략
    </Flex>
  </Notification>
)
```

