## axios 연습

아직 명확하게 개념을 못잡은거 같아서 axios연습을 진행하였고 계속 하다 보니 어느정도 감을 찾은것 같다! 주석을 달면서 복습하자!

```js
import React,{useState, useEffect} from 'react'
import axios from 'axios'

function Ajaxreq() {

    const [data, setData] = useState([])

    // html을 모두 다운로드 받은 후에 실행된다.
    // useEffect는 서버에서 데이터를 받아오거나 오래걸리는 작업을 수행 할 때 주로 사용한다.
    // API호출을 한번만 하고 싶으면 뒤에 종속 배열을 사용하자 
    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts/')
        .then(data => {
            // 상태관리 함수에 넣어준다.
            setData(data.data)
            console.log(data)
        })
    } , [])    
       

        // 이 함수는 클릭 했을때 post요청하는 함수이며 클릭시 데이터가 추가 되는 함수로 만들었다. 
        const handleClick = async () => {
                // 첫번째 인자 Url, 두번째 인자는 요청시 사용할 데이터
                axios.post("https://jsonplaceholder.typicode.com/posts", {
                    title: '드디어 해결!!',
                    body: '저는 실험용입니다!!',
                    userId: '안녕하세요!!!',
                    id:101
                })
                .then(function (response) {
                     console.log(response);
                     // 매우 중요하다. 여기서 이터럴 에러가 떴는데 객체로 잡아주니 해결 되었다. 좀 더 공부하자.
                     // 카피본을 만들어서 사용하자.
                     let copy = [...data, {...response.data}]
                     setData(copy)
                }).catch(function (error) {
                    console.log(1,error);
                })      
        }

        
    
    return (
        <div>
            <button onClick={(e)=>handleClick(e)}>클릭!</button>
            {
                data.map(item => 
                <div key={item.id}>
                    <span>{item.userId}</span>
                    <span>{item.title}</span>
                    <span>{item.body}</span>
                </div>)
            }
        </div>
    )
}

export default Ajaxreq
```

<br />

조금더 연습을 해야겠고 어느 정도 감이 잡히기 시작한다.