## redux base 정리

### Action
상태의 변화가 필요할때 action을 발생시킴
이때 액션은 하나의 객체로 표현됨.
목록 추가, 목록 삭제에 대한 액션의 타입정의가 있어야 함.
즉, type지정은 필수!!

```js
{
	type: "ADD_TODO",
    data: {
    	id:0.
        text: "redux"
    }
}
```

<br />

### Ation creator
액션 생성함수 : 파라미터를 입력받아, 액션객체형태로 만들어 준다.

```js
function addTodo(data){
	return {
    	type: "ADD_TODO",
        data
    };
}
```

<br />

### Reducer
변화를 일으키는 순수함수이다. 즉 리듀스 함수를 통해 prevState와 action을 받아서 변화를 일으키는 것이다.

```js  
function reducer(state, action){
	...
    return alteredState;
}
```

여기서 리턴값은 리듀서를 통해 변화된 상태값. 리듀서의 불변성은 매우 중요한 속성. (redux의 state 업데이트는 immutable한 방식으로 변경해야함

<br />

### Store
컴포넌트 외부에 있는 단 하나의 상태저장소를 말한다. 스토어 내부에 현재 상태들, 리듀서, 몇가지 내장함수들을 포함하고 있음.

```js
// createStore 메소드를 활용해 리듀서를 연결한다.
const store = createStore(reducer);
```

<br />

### Dispatch

store의 내장함수 중 하나로, 역할은 액션을 발생시키는 것.
(action을 전달하는 메소드라고 생각하자 -> dispatch의 전달인자로 action객체가 전달됨)

Reducer를 호출해서 state의 값을 바꾸는 역할을 함 .

<br />

### 리덕스 사용 과정

- 액션타입을 정의. (추가, 삭제 등)
- 각각의 액션함수는 "액션타입"과 "파라미터"를 받아 액션을 객체 형태로 반환.
- 상태의 변화가 필요해지면, 디스패치가 액션을 발생시켜 스토어에게 알림
(디스패치에 액션을 인자로 실어준다) : 사용처는 이벤트핸들러 함수가 되기도
- 스토어로 전달된 액션은 스토어의 리듀서함수를 호출함
- 호출된 리듀서함수는 현재상태값을 변화시켜 새로운상태를 반환.
- 반환된 상태는 스토어에 저장됨.