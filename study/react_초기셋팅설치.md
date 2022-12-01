## 리엑트 초기 셋팅 설치

뭔가 만들때 계속 보고 설치 하는게 귀찮아서 여기다 자주 사용하는 설치 패키지들 정리해야 겠다.

```
// 초기 리엑트 설치
npx create-react-app client

// 스타일드 컴포넌트
npm i styled-components

// mui 설치 파일
npm install @mui/material @emotion/react @emotion/styled --force
npm install @mui/icons-material --force
npm install @mui/lab --force

// router
npm i react-router-dom

// 리덕스 사용한다면
npm i redux react-redux redux-devtools-extension

// css초기화 설치
npm i styled-reset

```

#### css초기화 설치시

```js
// 암대나 해도 상관없음
// index.js

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

const GlobalStyle = createGlobalStyle`
  ${reset}
`;


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
     <GlobalStyle />
    <App />
  </React.StrictMode>
);
```


추가 사항 있으면 다시 정리하자!
