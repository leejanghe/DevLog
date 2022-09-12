## 배포방법 (깃)

### 1. 우선 gh-pages 설치한다.

```js
npm i gh-pages
```

### 2. 배포할 페이지 url설정

```js
// package.json
//... 생략
  "homepage": "https://leejanghee.github.io/twitter_clone/"
}
```

### 3. 스크립트 설정

```js
// package.json
//... 생략
 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "eject": "react-scripts eject",
    "deploy": "gh-pages -d build",
    "predploy": "npm run build"
  },
```

### 4. 배포된 링크 클릭

터미널창에 `npm run build` 입력하고 해당 링크로 이동하면 배포한 페이지가 나온다!

추가적으로 npm run deploy를 하자
