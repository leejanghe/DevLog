## styled-componets

styled components는 javascript에서 css를 사용 할 수 있도록 도와주는 스타일링 프레임워크입니다. React Component에 특정 스타일링을 할 수 있기 때문에 재사용성을 더 높일 수 있고, javascript에 영향을 받는 스타일링을 간편하게 구현 할 수 있습니다.

<br />

## 사용 방법

1. 기존 css를 사용하는 방법

```js
const divStyle = {
    backgroundColor: "black",
    width: "100px",
    height: "100px",
  };
  return <div style={divStyle}></div>
```  

2. styled-components를 사용하는 방법

```js
const StyledDiv = styled.div`
    background-color: black;
    width: 100px;
    height: 100px;
  `;

return <StyledDiv></StyledDiv>
```

기존의 React Component 스타일링은 style 속성에 객체를 전달하거나 className을 설정하고 별도의 css 파일을 import하는 방식으로 사용해왔습니다.

styled-components는 style이 적용된 Component를 직접 생성하기 때문에, 스타일링을 위한 코드 사용량이 줄어드는 효과가 있습니다. 또 key value의 형태가 아닌 css의 문법을 그대로 사용하기 때문에 기존 css의 사용법보다 가독성도 높습니다.

<br />

### 1. component 단위 스타일링

```css
/* css */
.iaxDju {
    background-color: black;
    width: 100px;
    height: 100px;
    display: none;
}
```
```js
//js
<div class="sc-bdnylx iaxDju"></div>
```

styled-components로 생성된 Components들을 빌드하면 임의의 클래스 명에 스타일이 적용되어 있는 것을 확인 할 수 있습니다. styled-components는 중복되지 않는 특정 class명을 생성해 스타일을 적용하기 때문에, className이 중복되거나 selector의 우선 적용 순위 때문에 css 스타일링이 혼선을 일으키는 사고를 방지 할 수 있습니다.

<br />

### 2. 조건부 스타일링

```js
  const StyledDiv = styled.div`
    background-color: black;
    width: 100px;
    height: 100px;
    ${({ login }) => {
      return login ? `display: none` : null;
    }}
  `;

  return <StyledDiv login={true}></StyledDiv>;
```

styled-components는 Component의 props를 전달받아 사용하는 것이 가능합니다. 템플릿 리터럴 내에서 javascript를 사용하는 것과 같은 형식이며, 내부에서 선언된 함수는 props를 파라미터로 실행됩니다.

<br />

### 3. 확장 스타일링

```js
const Container = styled.div`
    max-width: 600px;
    width: 100%;
    height: 100px;
  `;

  const BlackContainer = styled(Container)`
    background-color: black;
  `;

  const RedContainer = styled(Container)`
    background-color: red;
  `;

  return (
    <>
      <BlackContainer />
      <RedContainer />
    </>
  );
```

styled-components는 새로운 Component를 선언하는 것 뿐만 아니라, 기존의 Component에 스타일을 추가하는 것도 가능합니다. 확장 스타일링을 사용하면 중복된 코드 양을 줄이고, 분산된 스타일을 일관적으로 관리 할 수 있어 유지보수 비용을 줄일 수 있습니다.

```js
const MyLink = styled(Link)`
    color: black;
    text-decoration: none;
  `;

  return (
    <Router>
      <MyLink to="/main"> 커스텀 링크 </MyLink>
    </Router>
  );
```

기존 Component에 스타일을 추가 할 수 있는 기능 덕분에, 서드 파티 Component와도 호환이 가능합니다. 예를 들면 자주 사용하는 React-router-dom의 Link Component의 경우에도 위와 같은 방법으로 스타일을 적용해 사용 할 수 있습니다.

<br />

### 4. 중첩 스코프

```js
const StyledDiv = styled.div`
    background-color: black;
    width: 100px;
    height: 100px;
    p {
      color: white;
    }
  `;

  return (
    <>
      <StyledDiv>
        <p>Title</p>
      </StyledDiv>
      <p>content</p>
    </>
  );
```

SASS의 중첩 스코프 규칙을 사용할 수 있습니다. 덕분에 내부의 모든 component를 styled-components로 생성하지 않아도, 하위 컴포넌트에게만 적용하고 싶은 스타일을 스코프 형태로 구현 할 수 있습니다. (주의: 모든 SASS 문법이 사용 가능하진 않습니다.)


