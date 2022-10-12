## event loop

---

웹브라우저 동작원리를 알아야 한다. 이유는 ? 내 코드가 크롬에서 실행해주니까!!

<br />

### 자바스크립트 언어는 ?

자바스크립트는 동기식 언어이다. 즉 한 번에 하나의 작업을 수행하며 이를 싱글 스레드, 동기 라고 부른다.

```js
console.log(1);
consele.log(2);
console.log(3);

// 1, 2, 3
```

힙과 스택은 자바스크립트의 주요 구성 요소이다. heap은 변수와 객체의 메모리 할당을 담당하는 곳이며
stack은 함수가 호출이 되면 쌓이는 곳이다. 쉽게 말해 우리가 짠 코드를 실행해주는 곳이다.
last in frist out 구조로 가장 위에 쌓인 함수를 가장 먼저 처리한다.

<br />

### 용어 정리

- Heap : 메모리 할당이 발생하는 곳

- Call Stack : 실행된 코드의 환경을 저장하는 자료구조로, 함수 호출 시 이곳에 저장된다. 어떤 함수를 저장하면 스택에 쌓고 또 다른 함수를 호출하면 그 다음 스택에 쌓이면서 가장 위에 쌓인 함수를 가장 먼저 처리한다. LIFO(Last In First Out)

- Web APIs : Web API는 브라우저에서 제공하는 API로 DOM, Ajax, TimeOut 등이 있다.
  CallStack에서 실행된 비동기 함수는 Web API를 호출하고, Web API는 콜백 함수를 Task Queue에 넣는다.

- Callback Queue : 함수를 저장하는 자료구조로, Call Stack과 다르게 가장 먼저 들어온 함수를 가장 먼저 처리한다.

- Event Loop : 이벤트 루프는 call stack이 다 비워지면 callback queue에 존재하는 함수를 하나씩 call stack으로 옮기는 역할을 한다.

[참고자료](https://velog.io/@seokkitdo/%EC%9D%B4%EB%B2%A4%ED%8A%B8-%EB%A3%A8%ED%94%84%EB%9E%80)
