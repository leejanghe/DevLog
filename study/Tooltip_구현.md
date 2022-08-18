## Tooltip 구현 및 재사용 하기

작업할때 가끔 툴팁을 구현해야할 때가 있다. 물론 라이브러리를 활용해서 툴팁을 만들수 있지만 직접 구현하는 것도 좋을 것같다.

```js
import React,{useState} from 'react'

function Tooltip() {
    // 툴팁 오픈, 닫힘 상태를 상태 관리 
    const [showTooltip, setShowTooltip] = useState(false)
    return (
        <div>
            <span>물음표에 마우스를 올려보세요!
            <p onMouseOver={(e)=>setShowTooltip(true)} onMouseLeave={(e)=>setShowTooltip(false)}>?</p>
            </span>
            { showTooltip && <ToolTipContainer text={
            <>
                    <span>신기하다 툴팁 구현!</span><br/>
                    <span>저는 툴팁입니다!</span><br/>
                    <span>많이 이용하자!</span>
            </>
            }/>
            }
        </div>
    )
}

export const ToolTipContainer = ({ text }) => {
    return (
        <div className="toolTipContainer">
            {text}
        </div>
    )
}


export default Tooltip
```

핵심 포인트는 툴팁을 열고 닫고하는 상태 관리 함수와 onMouseOver, onMouseLeave를 적절히 활용해서 구현하는 것이다. 많이 사용하자! 

<br />

### 추가!! 튤팁 재사용 하기

리엑트에서 왜 재사용성이 좋다라는지 이작업을 하면서 깊게 알게 된 것 같다. 기존 컴포넌트는 그대로 두고 상태 값을 다르게 해여 재사용성을 높힐수 있다. 아래 예제를 보면서 참고하자!

```js
import React,{useState} from 'react'
// import { ToolTipContainer } from '../components/ToolTipContainer'

function Tooltip() {

    const [showTooltip, setShowTooltip] = useState(false)
    const [showTooltipTwo, setShowTooltipTwo] = useState(false)
    return (
        <>
        <div>
            <span>물음표에 마우스를 올려보세요!
            <p onMouseOver={(e)=>setShowTooltip(true)} onMouseLeave={(e)=>setShowTooltip(false)}>?</p>
            </span>
            { showTooltip && <ToolTipContainer text={
            <>
                    <span>신기하다 툴팁 구현!</span><br/>
                    <span>저는 툴팁입니다!</span><br/>
                    <span>많이 이용하자!</span>
            </>
            }/>
            }
        </div>
        <hr />
        <div>
            <span>재사용 툴팁입니당 느낌표에 마우스를 올려보세요!
            <p onMouseOver={(e)=>setShowTooltipTwo(true)} onMouseLeave={(e)=>setShowTooltipTwo(false)}>!</p>
            </span>
            { showTooltipTwo && <ToolTipContainer text={
            <>
                    <span>재사용 툴팁 입니다.</span><br/>
                    <span>하나의 컴포넌트로 다른 내용이!!</span><br/>
                    <span>상태 관리만 다르게하자!</span>
            </>
            }/>
            }
        </div>
        </>
    )
}

export const ToolTipContainer = ({ text }) => {
    return (
        <div className="toolTipContainer">
            {text}
        </div>
    )
}


export default Tooltip
```

프로젝트를 진행하면서 많이 배워가는 것 같다! 기분 좋다!

<br />

## 추가 튤팁 관한 예제 사이트

자바스크립트를 쓰지 않고 오직 html, css로 구현한 튤팁이 있다. 생각보다 나쁘지 않은것 같다.

[튤팁구현](https://deeplify.dev/front-end/markup/tooltip)
