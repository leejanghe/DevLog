## 리엑트 신기능

복잡하고 동시작업시 브라우저가 끊기거나 성능이 좋지 않다. 하지만 리엑트에서 새로 나온 useTransition,useDeferredValue를 사용하면 성능을 개선해주고 매끄럽게 만들어 준다. 사용법은 아래 예제와 같고 생각보다 간단하다.

```js
import {useState, useTransition, useDeferredValue} from "react"

// a라는 변수에 10000가지 요소가 담긴 배열 
let a = new Array(10000).fill(0)

function App(){
    let [name, setName] = useState('')

    // 성능 개선
    let [isPendding, startTransition] = useTransition()

    // 위와 비슷한 개념
    let state = useDeferredValue(name)

    return (
        <div>
            <input
            
              
              onChange={(e)=>{
                    // 중요 포인트
                  startTransition(()=>{
                  })
                  setName(e.target.value)
              }}
            />
            {
                isPendding ? '로딩중':
                a.map(()=>{
                    // 중요 포인트
                    return <div>{state}</div>
                })
            }
        </div>
    )
}

```

중요한점은 코드적으로 문제가 있다고 판단되는 함수에다 startTransition함수를 콜백에 감싸서 내보내면 된다.