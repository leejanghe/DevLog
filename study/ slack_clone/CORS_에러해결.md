# axios로 요청 보내기와 CORS, proxy

api문서에서 
POST / users  
회원가입  
body:{email:string(이메일), nickname:string(닉네임), password:string(비밀번호)}  
return:'ok'  

라고 가정했을 때 프론트에선 아래와 같이 요청을 보내면 된다.

```js
// 요청 보낼때 백엔드 포트에다 보내기
axios.post('http://localhost:3095/api/users' , {
    eamil, 
    nickname,
    password,
})
// 성공할 경우
.then((res)=>{
    console.log(res)
})

// 실패할 경우
.catch((err)=>{
    console.log(err.res)
})

// 실패든 성공이든 공통으로 보내줌
.finally(()=>{

})


```

추가적으로 개발을 하면서 프론트 개발자도 네트워크 헤더 부분을 이해하고 숙지해야 한다.

## CORS요청

post요청을 보낼때 프론트와 백앤드의 포트가 다를 때 options 요청을 한번씩 더보낸다. (이부분 공식문서 한번더 확인해보자)

<br />

## CORS 에러 해결

origin을 허용하면 된다.

```js
app.use(
    cors:({
        origin:true,
        credentials:true,
    })
)
```

<br />

## 프론트 자체적 해결방법

컨피그에서 웹팩 데브서버에서 프록시 설정을 해주면 된다.

```js
devServer :{
    historyApiFallback:true,
    port:3090, //프론트 포트
    publicPath:'/dist/',

    // 프록시 설정
    // 타겟에 프론트엔드에서 보내는 요청은 3095로 바꿔서 보냄
    proxy:{
        '/api/':{
            target:'http://locallhost:3095',
            changeOrigin:true,
        },
    }
}
```

추가적으로 웹팩 컨피그를 바꿧을 경우는 서버를 다시 시작해줘야 한다. 또 한 프론트에서도 변경해야함

```js
// `http://localhost:3095` 생략해야 한다. 이미 웹펙 설정해서 3095로 속여서 보내주기 때문에
axios.post('/api/users' , {
    eamil, 
    nickname,
    password,
})
```

이렇게 할 경우 같은 도매인으로 취급이 되어 cors에러를 피해갈수 있다. 단 프론트와 백앤드가 같은 로컬일때 이방법을 사용하자!

<br />

추가내용

<br />

## 프론트와 백엔드 도메인이 다를 경우 쿠키 발생하지 않는 에러 해결

프론트 서버와 백엔드 서버가 다르면 cors에러가 생기는데 두번째 문제점은 쿠키 전달이 안된다. 이럴때는 `withCredentials` 설정을 해주면 해결이 된다. post요청일때는 3번째 인자에다, get요청일 때는 2번째인자에다 작성하면 된다. 이설정을 하면 도메인이 달라도 쿠키가 생성된다.  

```js
//... 생략
    axios
        .post(
          '/api/users/login',
          { email, password },
          {
            withCredentials: true,
          },
        )
        .then((response) => {
          revalidate();
        })
        .catch((error) => {
          setLogInError(error.response?.data?.statusCode === 401);
        });
    },
    //...생략
```

추가적으로 `withCredentials` 설정을 넣어야 백엔드에서 프론트로 쿠키 전달이 가능하고 프론트에서 백엔드로 데이터를 전달 할 수 있다. 이점 꼭 기억하자!

쿠키는 백엔드에서 생성하고 프론트 브라우저에서 쿠기를 기억해서 매 요청마다 백엔드에 데이터를 전달한다.  

<br />

그외 질문 궁금했던 내용들

---

## 프록시 서버는 언제 쓰나 ?

cors에러를 피해갈때 프론트에서 백엔드와 소통하기 위해 자체적으로 사용한다. 배포환경과는 다르다. 

<br />

## 로그인 정보는 어디에 ?

로그인 정부는 대부분 쿠키에 저장된다.

<br />

## cors에러는 서버에러인가 ?

서버에러가 아닌 브라우저에 나타나는 에러이다. 브라우저를 쓰지 않으면 cors에러도 생기지 않는다.