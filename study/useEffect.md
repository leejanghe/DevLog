## useEffect 

너무 애매하게 개념을 알고 넘어 간거 같아서 다시 한번 복습했다.
useEffect() 함수는 React component가 렌더링 될 때마다 특정 작업(Sied effect)을 실행할 수 있도록 하는 리액트 Hook이다. 여기서 Side effect는 component가 렌더링 된 이후에 비동기로 처리되어야 하는 부수적인 효과들을 뜻한다.

<br />

## 간단한 예시

```js
useEffect(function, deps)
```

function : 실행하고자 하는 함수  
deps : 배열 형태. function을 실행시킬 조건.  
deps에 특정값을 넣게 되면 컴포넌트가 mount 될 때, 지정한 값이 업데이트될 때 useEffect를 실행합니다.

```js
import React,{useState,useEffect} from 'react'

function UseEffectTest() {

    const [count, setCount] = useState(1)
    const [name, setName] = useState('')

    const handleCountUpdata = () => {
        setCount(count + 1)
    }

    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    //렌더링 될때마다 매번 실행됨
    useEffect(() => {
        console.log('렌더링 될 때마다 실행')
    })

    // 처음 렌더링 될 때 한번만 하고 싶으면 빈배열을 (API호출)
    useEffect(() => {
        console.log('맨 처음 렌더링 될 때 한번만 실행됨')
    },[])

       //특정값이 업데이트 될 때만 실행 하고 싶을 때
       useEffect(() => {
        console.log('count가 바뀔때마다 실행됨')
    },[count])

       //특정값이 업데이트 될 때만 실행 하고 싶을 때
       useEffect(() => {
        console.log('name이 바뀔때마다 실행됨')
    },[name])

    return (
        <div>
            <button onClick={handleCountUpdata}>update</button>
            <span>{count}</span>
            <input value={name} onChange={handleInputChange}/>
            <span>name : {name}</span>
        </div>
    )
}

export default UseEffectTest
```

<br />

## 번외 clean up

useEffect는 함수를 반활할 수 있는데 이를 clean up이라고 한다.

```js
// Component가 Unmount 되었을 때(사라질 때) & Update 되기 직전에
 useEffect(() => {
    console.log("컴포넌트 나타남");
    console.log(name);
    return () => {
      console.log("cleanUp 함수");
    };
  });
 ``` 

 useEffect는 정말 많이 사용하는 함수 중 하나이다. 꼭 숙지하고 상황에 따라 잘 사용해보자.