# Err Log

그냥 에러 걸린거 정리하자...

<br />

## react/jsx-no-undef

이 에러는 라우터에 관한 에러이다. 해결하기 위해선 import가 잘되어 있는지 컴포넌트로 보낸 것인지, 함수로 보내는 것인지 잘확인하자.

```js
// 객체로 묶지 않음
import DesignerMain from "../../Pages/DesignerHome/DesignerMain";

//...생략

<Route path="/designerhome" component={DesignerMain} />;
```

import에서 네임에서 객체로 묶어서 보내는지 그냥 보내는지 파악하자 만약 객체로 묶지 않고 보냈을 경우는 아래와 같이 작성하면 된다.

```js
import React from "react";

function DesignerMain() {
  return <div>DesignerMain</div>;
}

export default DesignerMain;
```

<br />

```js
// 객체로 묶음
import { DesignerMain } from "../../Pages/DesignerHome/DesignerMain";

//...생략

<Route path="/designerhome" component={DesignerMain} />;
```

객체로 묶어서 보낼 경우는 아래와 같이 콜백함수로 export해주면 된다.

```js
import React from "react";

export const DesignerMain = () => {
  return (
    <>
      <div>DesignerMain</div>
    </>
  );
};
```

<br />

## no route matched location ''

극심한 에러는 아니지만 콘솔창에서 거슬릴 때가 있다. 이에러는 <Routes>안에 <Route>를 감싸주지 않으면 생기는 에러이다. 그리고 개별적으로 감싸지 말고 한꺼번에 감싸야 에러가 안생긴다.

```js
<Routes>
  <Route path="/" element={<LandingPage />} />

  <Route path="notice" element={<NoticePage />} />

  <Route path="debate" element={<DebatePage />} />

  <Route path="chat" element={<ChatPage />} />

  <Route path="login" element={<LoginPage />} />

  <Route path="sign" element={<SignPage />} />

  <Route path="*" element={<NoMatchPage />} />
</Routes>
```

<br />

## 'usehistory' is not exported from 'react-router-dom' 오류

리엑트 업데이트 후 usehistory 대신 useNavigate로 변경 되었다. 사용법은 기존 useHistory와 비슷하고 던어만 바꿔주면 된다.

```js
import {useNavigate} from 'react-router-dom';

//... 생략
const navigate = useNavigate()

//... 생략

<button onClick={()=>navigate('/')}>홈으로</button>
```
