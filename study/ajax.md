## jquery ajax

서버와 데이터를 주고받을 때는 문자만 주고 받을수 있다. 고로 배열이나 객체를 주고받을 수 없다. 그래서 json형태로 바꿔서 전송한다. 하지만 제이쿼리에서 ajax는 알아서 json형태로 바꿔주며 알아서 객체와 배열형태로 바꿔준다. 이러한 이점이 있어 제이쿼리 ajax를 쓰는 것 같다.

<br />

## ajax란 ?

서버에 get, post 요청을 할 때 새로고침 없이 데이터를 주고받을 수 있게 도와주는 간단한 브라우저 기능을 ajax라고 한다. 이걸 쓰면 새로고침 없이 데이터를 주고받을 수 있다.

<br />

## get, post 요청

```js
//get 요청
// 데이터를 받아온다.
$.get(url).done(function(data){
    console.log(data)
}).fail(function(err){
    console.log(err)
})

// post 요청
// 데이터를 보내준다.
$.post(url, {name:'lee'}).done(function(data){
    console.log(data)
}).fail(function(err){
    console.log(err)
})
```

실제로 실습을 해보고 다시 정리를 해야 겠다.
