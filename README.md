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

## 강의 다 듣고 리팩토링 하기
### styled component ver4 문법으로 기술
- injectGlobal -> createGlobalStyle

### Hooks 사용
- 기존 class 컴포넌트들 function 컴포넌트로 변경
- context API 부분도 useContext로 바꾸기
