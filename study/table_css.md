##  Table UI만들기

이번엔 라이브리 없이 테이블 UI를 만들어 보았다.

```js
import React from 'react'
import styled from 'styled-components'


export const WrapForm = styled.div`
border: 1px solid #CBCBCB;
padding:3rem;
`

const WrapHeadText = styled.div`
display:flex;
justify-content:space-between;
align-items:center;
`

export const IntroFont = styled.h1`
font-size:1.3rem;
`

export const InerForm = styled.div`
padding:1rem;
`

const InterHeadTag = styled.div`
margin-top:2rem;
display: grid;
border-top:1.5px solid #333;
border-bottom:1.5px solid #333;
grid-template-columns:2fr 1fr 1fr 1fr 1fr;
color: #333;
font-weight:700;
padding:1rem;
>p{
    display:flex;
    justify-content:center;
  &:nth-child(1){
    justify-self:self-start;
  }
}
`

const ContentsTag = styled.div`
display:grid;
border-bottom:1.5px solid  #CBCBCB;
grid-template-columns:2fr 1fr 1fr 1fr 1fr;
flex-direction:row;

padding:1rem;
>p{
  display:flex;
  justify-content:center ;
  color:#999999;
  font-weight:400;
&:nth-child(1){
    justify-self:self-start;
  }
&:nth-child(4){
    color:#FA8A23;
    background-color:#FFF2E8;
    border-radius: 1rem;
    width:100px;
    margin:auto;
}  
&:last-child{
    color:#48BEDF;
    text-decoration: underline;
    cursor: pointer;
  }
}
`

function Table2() {
  const reqPayment = [
    {id:0, addwork:'로고 디자인 추가 시안 1건 제작', paydate:'2021.09.12 13:11', price:'300,000', state:'결제 대기 중', manage:'요청 취소'},
    {id:1, addwork:'로고 디자인 추가 시안 1건 제작', paydate:'2021.09.12 15:56', price:'300,000', state:'요청 취소됨', manage:null},
    {id:2, addwork:'로고 디자인 추가 수정 1회', paydate:'2021.09.12 21:31', price:'999,300,000', state:'결제 대기 중', manage:'요청 취소'},
]

  return (
    <WrapForm>
    <WrapHeadText>
    <IntroFont>보낸 결제 요청</IntroFont>
    </WrapHeadText>
    <InerForm>
      <InterHeadTag>
        <p>작업 추가 내용</p>
        <p>결제요청일</p>
        <p>금액</p>
        <p>상태</p>
        <p>관리</p>
      </InterHeadTag>
      <div>
      {
       reqPayment&&reqPayment.map((e)=>(
          <ContentsTag key={e.id}>
            <p>{e.addwork}</p>
            <p>{e.paydate}</p>
            <p>{e.price}</p>
            <p>{e.state}</p>
            <p>{e.manage}</p>
          </ContentsTag>
        ))
      }
      </div>
    </InerForm>
    </WrapForm>
  )
}

export default Table2
```

오늘 만들면서 가장 좋았던건 스타일컴포넌트에서 `&:nth-child`를 사용하는 방법이다. 부모태그안에 자식태그가 있을때 인덱스를 사용하여 자식태그를 선택할 수 있다. 범위설정 및 마지막 첫번째 자식태그 등 다양하게 활용할 수 있다. 나중에 또 써먹자!