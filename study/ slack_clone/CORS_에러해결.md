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
