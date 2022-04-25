## debugging

프로그램의 버그를 제거하는 과정인 디버깅이 필수인 이유이다. 디버깅을 완료하면, 개발자의 의도에 따라 소프트웨어가 더 완벽하게 작동할 확률이 높다는 점에서 디버깅이 중요하다. 또, 개발자는 디버깅 과정을 거치며 다음 개발 과정에서 더 훌륭한 프로그램을 제작할 방법을 알 수 있다

<br />

## 디버깅 과정

### 1. VScode extension설치
마켓플레이스에서 Debugger for Chrome을 검색 후 설치

<br />

### 2. vscode/launch.json 설정
디버깅 버튼을 클릭하면 launch.json파일이 생성되는데 아래와 같이 설정

```js
{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "chrome",
            "request": "launch",
            "name": "chrome debugger",
            "url": "{해당 클라이언트 포트}",
            "webRoot": "${workspaceFolder}/src"
        }
    ]
}
```

<br />

### 3. 디버깅 실행
단축키 F5를 클릭하면 클라이언트 페이지가 뜬다.

<br />

### 4. 디버깅 할 구간 설정
체크포인트, 브레이크포인트를 설정해 디버깅 실시

<br />

### 메뉴 단축키 기능

- **continue**

 - 다음 breakpoint로 이동, 다음 breakpoint가 없을 시 디버깅 종료

- **step over**

 - 현재 break 된 파일에서 다음 라인으로 이동

- **step intobreak**

 - 된 라인에서 실행되고 있는 내부 함수로 이동

- **step outbreak**

 - 라인에서 호출한 곳으로 이동합니다.

- **restartdebugger**

 - 재실행

- **stopdebugger**

 - 종료

[참고 사이트](https://thxwelchs.github.io/react-debug/)