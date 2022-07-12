## 상태에 따른 css작업 연습

일부 css클래스명에 데이터 바인딩을 하여 상태에 따른 다양한 css를 부여 할 수 있다. 생각보다 재미있고 다양하게 쓰일 것 같다.

```js
import React,{useState} from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
background: whitesmoke;
display: grid;
grid-template-columns: 1fr 1fr 1fr 1fr;
>div{
    text-align: center;
    .statusValue{
        border-radius: 4rem;
        width: 150px;
        text-align: center;
        display: inline-block;

             /* color: red; */
            &.PAYMENT_STATUS_001 {
                color: #fa8a23;
                background-color: #fff2e8;
                border: 1.5px solid #FF9100;
            }
            &.PAYMENT_STATUS_002 {
                color: #38e14d;
                background-color: #e7f5e8;
                border: 1.5px solid green;
            }
            &.PAYMENT_STATUS_003 {
                background-color: #fceaed;
                color: #e14238;
                border: 1.5px solid #FF9100;
            }
         }
}
`


function StatusValue() {

const [data, setData] = useState([
       {id:0, title:'가나다', amount:'34333', status:'PAYMENT_STATUS_001',regDt:'13:22'},
       {id:1, title:'헤이헤이', amount:'50000', status:'PAYMENT_STATUS_002',regDt:'13:22'},
       {id:2, title:'자자자', amount:'444210', status:'PAYMENT_STATUS_001',regDt:'10:22'},
       {id:3, title:'가나다', amount:'330442', status:'PAYMENT_STATUS_003',regDt:'14:32'},
])


    return (
        <>
        <Wrap>
            {
                data.map(e=>(
                    <div key={e.id} className="paypay">
                        <p>{e.id}</p>
                        <p>{e.title}</p>
                        <p>{e.amount}</p>
                        <p>{e.regDt}</p>
                        {
                            e.status === 'PAYMENT_STATUS_001'?(<p className={`statusValue ${e.status}`}>대기대기!</p>)
                        :   e.status === 'PAYMENT_STATUS_002'?(<p className={`statusValue ${e.status}`}>완료!!!</p>)
                        :   (<p className={`statusValue ${e.status}`}>취소취소!</p>)
                        }
                    </div>
                ))
            }
        </Wrap>
        </>
    )
}

export default StatusValue
```

<br />

## 상태에 따른 css변경하기 라디오 채크 버전

라디오 채크를 활용힐 때 상태에 따른 css를 적용 할 수 있다. 많이 사용하는 기술이니 꼭 숙지하자! 

```js
// 상위 컴포넌트에서 상태 관리를 하고 작업 할 하위 컴포넌트에 넘겨줌
const [selectMember, setSelectMember] = useState({type:''})
```

위에 상태를 아래로 넘겨줬다는 가정하에 아래 코드를 살펴 보자!

```js
import React from 'react'

// 상태 값 전달 받음
function MemberType({selectMember,setSelectMember}) {



    const MemberSelect = [
        { type : '개인', p:'사업자 등록번호가 없는 개인'},
        { type : '사업자',p:'개인사업자 또는 법인사업자' },
    ]

// 클릭시 상태 값을 확인 할 수 있다. 많이 사용함
    const clickHandler = status => {
        setSelectMember(status)
    }

  return (
    <>
    {/* 회원 유형 */}
    <div className='certificationText'>
            <h3>회원 유형</h3>
        </div>
        <div className='certificationInputText category'>
          <p>유형</p>
        {
            MemberSelect&& MemberSelect.map(item=>(
                <div className={`userCategory ${selectMember.type === item.type && 'check'}`} onClick={()=>clickHandler(item)}> 
                
            <div>
          <input type="radio" name="개인" value="개인"/><label>{item.type}</label>
            </div>
          <p>{item.p}</p>
          </div>
            ))
        }
    </div>
    </>
  )
}

export default MemberType
```

여기서 중요한 코드는 `<div className={`userCategory ${selectMember.type === item.type && 'check'}`} onClick={()=>clickHandler(item)}>` 이다.
온클릭을 할 때마다 타입에 따라 css  check를 붙이거나 안붙이는 역할을 한다. 유용하니 다음에도 써먹자!




