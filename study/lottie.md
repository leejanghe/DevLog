## Lottie 사용법

## lottie

로티란 주로 웹에 사용되는 이미지 래스트와 백터로 구분되는데, 래스터는 픽셀 개념이며, 벡터는 수학 방정식을 기반으로 점, 선 곡선 등을 그리는 개념이다. 래스터는 주로 사진 이미지에 적합하고, 벡터는 기호나 단순한 형태, 거대한 크기로 인쇄가 필요할 때 사용한다. 

- 래스터 (jpg, png)
- 벡터 (ai, svg)

로티는 svg의 애니메이션 버전이라 생각하면 된다. 즉 벡터 기반 에니메이션이라고 생각하면 된다. 또 한 애프터 이펙트라는 어플리케이션에서 작업을 하고 소스 코드를 활용해서 로티에 적용하는 것도 있다.

<br />

## lottie를 쓰는 이유
- 백터 기반이라 용량이 적고 크기나 해상도 저하가 없다.
- 적용이 간단하다.
- 사용자 인터렉션이 가능하다.

<br />

## lottie 사용 방법

1. 공식 홈페이지 들어가기

[lottie](https://lottiefiles.com/featured)에 들어가서 원하는 아이템을 선택하고 Json 파일을 다운받습니다.

2. 파일을 다운로드하면 vs에디터에 정장되며 따로 에니메이션 폴더를 만들어서 저장합니다.

3. 저장한 파일을 import해서 사용하기만 하면 끝!

```js
import React from 'react'
import Lottie from 'lottie-react-web'
import animation from '../animation/animation.json'
import styled from 'styled-components'
import loading from '../animation/loading.json'
import boom from '../animation/boom.json'

const Wrapper = styled.div`
display: flex;
margin-top: 5rem;
`

function LottieTest() {
    return (
        <Wrapper>
        <Lottie 
            options={{
                animationData: animation
            }}
        />
        <Lottie 
            options={{
                animationData: loading
            }}
        />
         <Lottie 
            options={{
                animationData: boom
            }}
        />
        </Wrapper>
    )
}

export default LottieTest
```

[참고사이트](https://www.npmjs.com/package/lottie-react)