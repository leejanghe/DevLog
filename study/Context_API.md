## Context API 왜 사용할까?

기존 리엑트에서 데이터를 넘겨 줄 때 부모컴포넌트에서 자식컴포넌트로 props를 통해 전달한다. 하지만 컴포넌트가 동떨어져 있거나 단계마다 일일이 드릴링 하기엔 한계가 있다. 이러한 점을 보완하기 위해 리덕스나 `context api`를 사용한다.

<br />

## Context API란 ?

context를 이용하면 단계마다 일일이 props를 넘겨주지 않고도 컴포넌트 트리 전체에 데이터를 제공할 수 있다. 또한 리엑트에서 context api를 위해 훅스도 제공한다. 쉽게 말해 하위컴포넌트들이 props 없이도 부모의 값을 사용가능하다.


<br />

## Context API 사용방법

### step1 context만들기(범위 지정)

공유할 데이터 변수를 만들어 준다.

```js
// 같은 변수값을 공유할 범위 생성
let stackcontext = React.createContext()

function App(){
    let [stack, setStack] = useState(data)
}
//...
```

<br />

### step2 같은 값을 공유할 범위 지정

값 공유를 원하는 html들을 `<범위.Provider>로 감싸고 공유를 원하는 값을 value={공유값}에 넣는다`

```js
<stackcontext.Provider value={stack}>
  <Cardcomponet>
</stackcontext.Provider>
```

<br />

### step3 공유된 값 사용하기

useContext()로 공유된 값 사용하기

```js
function Cardcomponet(){

let stack = useContext(stackcontext)

return (
    <div>
        {stack}
    </div>
)
}
```

주의 할점은 import를 잘하자! (useContext, createContext) 그리고 사용을 할 땐 범위생성한 context를 가져와서 useContext에 넣도록 하자!

<br />

## 개인 연습 context Api 활용 예제

### step1

context를 만들고 범위를 지정한다. 범위를 지정하는 곳에 데이터가 있어야 한다.

```js
// data.js
import React,{createContext} from 'react'

export const UserContext = createContext()

function UserStore(props) {

    const users = {
        name : 'joycoding',
        job: 'developer'
    }

    return <UserContext.Provider value={users}>{props.children}</UserContext.Provider>
}

export default UserStore
```

<br>

### step2

값을 공유 할 컴포넌트에 값 범위를 지정한 컴포넌트로 감싸 준다.

```js
// App.js
import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Detail from './page/Detail';
import Home from './page/Home';
import UserStore from './store/data'

function App() {
  return (
    <UserStore>

    <Router>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    <Routes>
      <Route path="detail" element={<Detail/>}/>
    </Routes>
    </Router>

  </UserStore>
)
}

export default App;
```

<br />

### step3

useContext()를 사용하여 공유된 값을 사용한다. 

```js
//Detail.js
import React, {useContext} from 'react'
import Card from '../component/Card'
import {UserContext} from '../store/data'

function Detail() {

    const context = useContext(UserContext)
    console.log(context)

    return (
        <div>
            <h1>Detail</h1>
            <p>{context.job}</p>
            <Card/>
        </div>
    )
}

export default Detail

//Card.js
import React, {useContext} from 'react'
import {UserContext} from '../store/data'

function Card() {

    const context = useContext(UserContext)

    return (
        <div>
            <h1>{context.name}</h1>
        </div>
    )
}

export default Card
```

