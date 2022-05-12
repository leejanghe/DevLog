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