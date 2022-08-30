## 소셜 로그인 및 로그아웃

### social login

---

1. 소셜 팝업 로그인을 하기 위해선 firebase를 임포트해야 한다. 편하게 변수로 저장해서 임포트를 하자!

2. 원하는 소셜팝업을 띄울 변수를 지정하고 `firebase.auth.원하는프로바이더` 로 변수에 담아준다.

3. `authService.signInWithPopup(아까 저장한 변수)` 를 적용시키면 손쉽게 소셜 팝업 로그인이 가능하다!

```js
//...생략
firebase.initializeApp(firebaseConfig);

// instance 모듈이 필요함
export const firebaseInstance = firebase;

export const authService = firebase.auth();
```

```js
  const onSocialClick = async (event) => {
    // Es6문법 버튼의 네임값을 가져온다.
    const {
      target: { name },
    } = event;

    // 변수에 소셜 프로바이더에 저장
    let provider;
    if (name === "google") {
      provider = new firebaseInstance.auth.GoogleAuthProvider();
    } else if (name === "github") {
      provider = new firebaseInstance.auth.GithubAuthProvider();
    }

    // 소셜 팝업 로그인
    const data = await authService.signInWithPopup(provider);
    console.log(data);
  };


//...생략
        <button onClick={onSocialClick} name="google">
          Continue with Google
        </button>
        <button onClick={onSocialClick} name="github">
          Continue with Github
        </button>
```

소셜 팝업 관련 공식문서는 아래 링크를 통해 확인해보자!

[공식문서 auth/popup](https://firebase.google.com/docs/reference/js/v8/firebase.auth.Auth?hl=en&authuser=0#signinwithpopup)

<br />
