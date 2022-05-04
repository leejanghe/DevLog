## Tab 있어보이게 만들기..

탭기능을 만들면서 useState와 useEffect에 좀 더 알아볼수 있는 시간이 되었다. 또 한 스타일컴포넌트에서 클래스명 조절해서 내가 원하는 기능을 할 수 있도록 하였다.

<br />

### 1. 탭 데이터 및 상태 설정하기

우선 탭을 사용하기 위해서는 탭의 정보를 어떻게 저장할지에 대해서 생각해야한다. 모달도 같은 방식이지만 true, false값을 활용해서 useState를 활용해서 조절하는 것이다.


```js
import React,{useState, useEffect} from 'react'
import DesignNavbar from './DesignNavbar'
import styled from 'styled-components'
import DetailReq from './DetailReq'
import DetailPay from './DetailPay'
import DetailWork from './DetailWork'

export const DetailLayout = styled.div`
max-width:1280px;
margin:auto;
`
const MainttextTag = styled.div`
margin-bottom:2rem;
font-weight:700;
font-size:1.3rem;
color:#333333;
margin-top: 2rem;
`


function Tabtab() {
  
const [active, setActive] = useState('1')
const [showRequest, setShowRequest] = useState(false)
const [showPayment, setShowPayment] = useState(false)
const [showWork, setShowWork] = useState(false)

const navs = [
    {id:'1', title:"로티애니메이션" },
    {id:'2',  title:"테이블1" },
    {id:'3', title:"테이블2" },
]

    useEffect(() => {
        setShowRequest(false)
        setShowPayment(false)
        setShowWork(false)

        if(active==='1'){
            setShowRequest(true)
        }else if(active==='2'){
            setShowPayment(true)
        }else if(active==='3'){
            setShowWork(true)
        }
    },[active])



  return (
      <>
      <DetailLayout>
      <MainttextTag>
      {
          navs[active-1].title
      }
      </MainttextTag>
      <DesignNavbar
      setActive={setActive} 
      navs={navs} 
      active={active}
      />
      {showRequest&& <DetailReq/>}
      {showPayment&& <DetailPay/>}
      {showWork&& <DetailWork/>}
      </DetailLayout>
      </>
  )
}

export default Tabtab
```

위에서는 탭에 대한 현상태와 네브바에 대한 데이터를 프롭스로 전달하는 과정을 거쳤다. 또 한 useEffect를 활용해서 탭의 상태를 조절하는 과정을 거쳤다.

```js
import React from 'react'
import styled from 'styled-components'

const DetailNavTag =styled.div`
  font-weight: bold;
  display: grid;
  grid-template-columns:1fr 1fr 1fr;
  justify-content:space-between;
  align-items: center;
  text-align:center;
  margin:auto;
  margin-bottom:3rem;
  color:#333333;
  cursor: pointer;
 
 .navItem {
     padding:1rem ;
     border:1px solid #CBCBCB;
 }

 .activeNav {
    color:#fff;
    background-color: #48BEDF;
}
`


function DesignNavbar({ setActive, navs }) {
    const clickHandler = (e) => {
        const target = e.currentTarget.classList

        if(target.contains('activeNav')){
            return false
        }else{
            document.querySelectorAll('.navItem').forEach((item) => {
                if(item.classList.contains('activeNav')){
                    item.classList.remove('activeNav')
                }else{
                    return false
                }
            })
            
            target.add('activeNav')
            setActive(target[1])
        }
    }

    return (
        <DetailNavTag>
            {navs.map((item, idx) => (
                <>
                <div id={item.id} className={`navItem ${item.id} ${idx===0 ? 'activeNav' : ''}`} onClick={clickHandler}>
                    <span>{item.title}</span>
                </div>
                </>
            ))}
        </DetailNavTag>
    )
}

export default DesignNavbar
```

이제 탭의 본격적인 기능을 만들기위해 위와 같이 진행하였고 조건문으로 클래스명을 조절하여 내가 원하는 탭에 해당 페이지가 나오게 하였다! 탭을 만들수 있는 다양한 방법이 있다. 이번에 만든 방법이 나름 유용한거 같다. 다음에도 재사용하자!