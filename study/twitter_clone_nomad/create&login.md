## 파이어 베이스 계정 생성 및 로그인


### Creating Account
---
Provider

- Auth provider
- EmailAuthProvider
- createuserwithemailandpassword

이번에 공부에 쓰인건 createuserwithemailandpassword이다. 사용자의 새로운 계정을 생성 할 수 있도록 이메일과 비밀번호를 인자로 받아 계정을 생성시키고 바로 로그인을 할 수 있다. 나중에 계정을 가지고 로그인을 할 수 있으며 이미 계정이 존재하거나 타당하지 않은 값인 경우 fail을 리턴한다. 또한 이함수는 프로미스를 반환하기 때문에 async로 비동기로 처리해준다.

추가적으로 try catch문을 사용해서 에러처리도 진행하도록 하자

```js
import React, { useState } from "react";
import { authService } from "fbase";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [newAccount, setNewAccount] = useState(true);
  const [error, setError] = useState("");
  const onChange = (event) => {
    const {
      target: { name, value },
    } = event;
    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };
  const onSubmit = async (event) => {
    event.preventDefault();
    try {
      let data;
      if (newAccount) {
        data = await authService.createUserWithEmailAndPassword(
          email,
          password
        );
      } else {
        data = await authService.signInWithEmailAndPassword(email, password);
      }
      console.log(data);
    } catch (error) {
      setError(error.message);
    }
  };

  const toggleAccount = () => setNewAccount((prev) => !prev);

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          name="email"
          type="text"
          placeholder="Email"
          required
          value={email}
          onChange={onChange}
        />
        <input
          name="password"
          type="password"
          placeholder="Password"
          required
          value={password}
          onChange={onChange}
        />
        <input
          type="submit"
          value={newAccount ? "Create Account" : "Sign In"}
        />
        {error}
      </form>
      <span onClick={toggleAccount}>
        {newAccount ? "Sign In" : "Create Account"}
      </span>
      <div>
        <button>Continue with Google</button>
        <button>Continue with Github</button>
      </div>
    </div>
  );
};
export default Auth;
```

<br />

### SetPersistence

 사용자를 어떻게 기억할 것인지 선택할 수 있게 도와주는 역할을 한다. 기본적으로 계정을 만들면 로그인이 되는데 브라우저 indexdDB에서 파이어베이스 로컬 스토리지db에서 유저 정보를 확인 할 수 있다.
 
 <br />
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 
 








