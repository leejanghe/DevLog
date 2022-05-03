## Tooltip 구현하기

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
