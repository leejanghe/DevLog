## React-image-marker

이라이브러리는 이미지를 이미지마커로 마크업하는 기능을 제공한다. 또 한 훅을 커스텀마이징해서 원하는 스타일로 바꿔 사용 할 수도 있다. 사용법은 간단하지만 응용해서 진행하다 보면 상태 관리를 할 때가 있는데 약간 어렵게 느껴진다. Context Api를 활용하면 해답이 나올 것 같다.

<br />

## 간단하게 만들어 보기

```js
//custom hook
import React,{useState} from 'react'
import styled from 'styled-components'

const Marker = styled.div`
display: flex;
color: #fff;
`

const NumberTag = styled.div`
background-color: #2B75EE;
width: 20px;
height: 20px;
border-radius: 50%;
display: flex;
justify-content: center;
`


function CustomMarker(a) {

    // const [text, setText] = useState('')

    // const onChange = (e) => {
    //     setText(e.target.value)
    // }

    return (
        <>
        <Marker>
            <NumberTag>{a.itemNumber}</NumberTag>
        </Marker>
        {/* {a.itemNumber}<input 
             onChange={onChange}
        /> */}
        </>
    )
}

export default CustomMarker
```

```js
import React, {useState} from 'react'
import ImageMarker from 'react-image-marker'
import styled from 'styled-components'
import CustomMarker from '../components/CustomMarker'

const Wrapper = styled.div`
width: 30%;
margin: 0 auto;
margin-top: 3rem;
display: flex;
flex-direction: column;
align-items: center;
`

const Btn = styled.button`
width: 30%;
margin-top: 1rem;
`

// const CustomMarker = (a) => {

//     const [text, setText] = useState('')

//     const onChange = (e) => {
//         setText(e.target.value)
//     }

//     console.log(1,a)
//     return (
//         <>
//         <Marker>
//             <NumberTag>{a.itemNumber}</NumberTag>
//         </Marker>
//         {a.itemNumber}<input 
//              onChange={onChange}
//         />
//         </>
//     )
// }


function ImageMarkerTest() {

    const [markers, setMarkers] = useState([])

    return (
        <>
        <Wrapper>
        <ImageMarker
        style={{backgroundColor: '#blue'}}
        src="https://www.newsworks.co.kr/news/photo/202002/433057_327801_345.jpg"
        markers={markers}
        onAddMarker={(marker) => setMarkers((prev) => [...prev, marker])}
        markerComponent={CustomMarker}
        />

<Btn disabled={!markers.length > 0} onClick={() => setMarkers([])}>
        Reset
</Btn>

<div>{markers.length}</div>
<CustomMarker/>
</Wrapper>

    </>
    )
}

export default ImageMarkerTest
```

간단하게 이미지 마커를 만들었지만 이미지를 마커하고 마커한 부분에 text작업을 추가하고 다른 컴포넌트에 context api를 활용해서 데이터를 전달하는 연습을 해봐야 할 것 같다. 좀 더 고민해보고 진행 해보자!

<br />

### 참고자료

설치방법이나 이라이브러리를 활용한 예제는 아래 참고해서 다시 공부 해보자!

[공식문서](https://github.com/galexandrade/react-image-marker)
[예시 센드박스](https://codesandbox.io/examples/package/react-image-marker)