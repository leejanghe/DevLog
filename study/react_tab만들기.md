## tab기능 만들기

탭 기능을 생각보다 많이 쓰는 것 같다. 공부하다보니 컴포넌트로 보낼수 있는 방법이 있길래 기록 해본다.

```js
function TabPage() {

    // 컴포넌트 오브잭트 상태를 바꿔주는 인덱스다. (탭)   
    const [tab, setTab] = useState({
        active:0,
    })
    
    // 간단한 탭 제목에 대한 내용이다.
    const obj = {
        0: <TabFirst />,
        1: <TabTwo />,
        2: <TabThree />
    }
    
    // 클릭하면 인덱스를 바꿔준다.
    const clickevent = (e) => {
        setTab({active:e})
        console.log(e)
    }



    return (
        <TabWrapper>
            <Tabcomponet obj={obj} clickevent={clickevent} tab={tab}/>
        </TabWrapper>
    )
}

export default TabPage
```

```js
function Tabcomponet({clickevent,obj,tab}) {
    return (
        <div>
            <div>
                <li onClick={()=>clickevent(0)}>1번나와랏!</li>
                <li onClick={()=>clickevent(1)}>2번나와랏!</li>
                <li onClick={()=>clickevent(2)}>3번나와랏!</li>
            </div>
            <div>
            {obj[tab.active]}
            </div>
        </div>
    )
}

export default Tabcomponet
```

정말 간단하게 사용하는거라면 이렇게 만들어서 사용해보는 것도 나쁘지 않을 것 같다.