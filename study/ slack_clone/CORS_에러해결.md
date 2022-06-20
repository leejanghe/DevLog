# axios로 요청 보내기와 CORS, proxy

api문서에서 
POST / users  
회원가입  
body:{email:string(이메일), nickname:string(닉네임), password:string(비밀번호)}  
return:'ok'  

라고 가정했을 때 프론트에선 아래와 같이 요청을 보내면 된다.

```js

axios.post('http://localhost:3090/api/users' , {
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



