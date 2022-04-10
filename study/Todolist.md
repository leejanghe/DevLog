## Context Api와 Styled Components를 이용한 TodoList 만들기

context api와 스타일 컴포넌트를 복습하기 위해 간단한 투두 리스트를 만들어 보았다.
만들긴 했지만 기본기가 부족한 느낌이다. 리엑트 공식문서와 기본기를 좀 더 다져볼 필요가 있을 것 같다...

```js
//App
import React from 'react'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import Header from './component/Header';
import Detail from './page/Detail';
import Home from './page/Home';
import GlobalStyle from './styles/GlobalStyle';

function App() {
  return (
 <>
 <GlobalStyle />
    <Router>
    <Header />

    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>

    <Routes>
      <Route path="detail" element={<Detail/>}/>
    </Routes>

    </Router>
  </>
)
}

export default App;

```

```js
//src/page/Home.js
import React,{useEffect, useState} from 'react'
import TodoCount from '../component/TodoCount'
import TodoForm from '../component/TodoForm'
import TodoList from '../component/TodoList'
import styled from 'styled-components'



const MainBody = styled.div`
    width: 100%;
    height: 100%;
    background-color: #f5f5f5;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
    padding: 20px;
    box-sizing: border-box;
    text-align: center;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    > h1 {
        font-size: 30px;
        font-weight: bold;
        margin-bottom: 20px;
        color: #022a35;
        border-bottom: 1.5px solid #022a35;
    }
`
const UserName = styled.div`
    color: rgba(55, 55, 56, 0.904);
    font-style:italic;
`

const MainTodoList = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 1rem;
    background-color: rgb(100, 102, 102);
    border-top-left-radius: .5em;
    border-top-right-radius: .5em;
`


const currentUser = "Lee Jang Hee"
export const todoContext = React.createContext()

function Home() {

    const [todo, setTodo] = useState([])

    const getTodo = async () => {
        const response = await fetch('https://run.mocky.io/v3/dabb17e3-4c91-469e-9c77-9126ad36cb77',{
            headers :{
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            }
        })
        const data = await response.json()
        setTodo(data.todolist)
    }

    const onDelete = (id) => {
        console.log(1,[...todo].filter(todo => todo.id !== id))
        // console.log(2, todo.filter(todo => todo.id !== id))
        // const deleteTodo = todo.filter(a => a.id !== id)
        // setTodo(deleteTodo)

    }

    useEffect(() => {
        getTodo()
    } , [])
    console.log(todo)

    const addNewTodo = (newTodo) => {
        setTodo([...todo, newTodo])
    }


    return (
      
        <MainBody>
            <h1>Todo List</h1>
            <UserName>작성자 : {currentUser}</UserName>
            <TodoForm addNewTodo={addNewTodo}/>
            <MainTodoList>
                {
                    todo.map(todo => 
                        <TodoList
                        onDelete={onDelete}
                        key={todo.id}
                        content={todo.content}
                        />
                    )
                }
            </MainTodoList>
            <todoContext.Provider value={todo}>
            <TodoCount />
            </todoContext.Provider>
        </MainBody>

    )
}

export default Home
```

```js
// src/component/header.js
import React from 'react'
import {Link} from 'react-router-dom'
import styled from 'styled-components'

const HeaderTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 50px;
    background-color: #b6bece;
    font-size: 20px;
    font-weight: bold;
    text-decoration: none;
    color: inherit;
    border-top-left-radius: 1em;
    border-top-right-radius: 1em;
    box-shadow: rgba(0, 0, 0, 0.07) 0px 1px 2px, rgba(0, 0, 0, 0.07) 0px 2px 4px, rgba(0, 0, 0, 0.07) 0px 4px 8px, rgba(0, 0, 0, 0.07) 0px 8px 16px, rgba(0, 0, 0, 0.07) 0px 16px 32px, rgba(0, 0, 0, 0.07) 0px 32px 64px;
    > a {
        text-decoration: none;
        color: inherit;
        color: rgb(68, 37, 97);
        margin: 20px;
        &:hover {
            color:rgb(232, 110, 110);
        }
    }
`


function Header() {
    return (
    <HeaderTag>
      <Link to="/">Home</Link>
      <Link to="/detail">Detail</Link>
    </HeaderTag>
    )
}

export default Header
```

```js
// src/component/TodoForm.js
import React,{useState} from 'react'
import styled from 'styled-components'

const Container = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-bottom: 1rem;
`

const TodoInput = styled.input`
    width: 80%;
    height: 30px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 0 10px;
    font-size: 14px;
    outline: none;
    margin: 1rem;
    &:focus {
        border: 2px solid #0286ab;
    }
`

const TodoBtn = styled.button`
    width: 80px;
    height: 30px;
    border: none;
    border-radius: 4px;
    background-color: #0286ab;
    color: #fff;
    font-size: 14px;
    outline: none;
    &:hover {
        background-color: #0ab3e2;
        transform: scale(0.98);
    }
`

function TodoForm({addNewTodo}) {

    const [newTodo, setNewTodo] = useState('');

    const onTextChange = (e) => {
        let value = e.target.value;
        console.log(value)
        setNewTodo(value)
    }

    const onSubmit = (e) => {
        e.preventDefault();
        let currentTodo = {
            id: Math.floor(Math.random() * 100),
            content: newTodo
        }
        if(newTodo === '') {
            alert('할일을 입력해주세요')
        }else{
            addNewTodo(currentTodo)
            setNewTodo('')
        }
    }

    return (
        <Container>
            <TodoInput 
             onChange={onTextChange} 
             value={newTodo}
             placeholder="할일을 입력하세요!"
             />
            <TodoBtn onClick={onSubmit}>Add Todo</TodoBtn>
        </Container>
    )
}

export default TodoForm
```

```js
// src/components/TodoList.js
import React from 'react'
import styled from 'styled-components'

const ContentTag = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: .8rem;
    font-size: 1rem;
    color: #fff;
`

// const TodoBtn = styled.button`
//     border: none;
//     border-radius: 50%;
//     background-color: #faf9f8;
//     color: #fff;
//     font-size: 1rem;
//     outline: none;
//     margin: 0 .3rem;
//     &:active{
//         transform: scale(0.98);
//     }
// `




function TodoList({id, content}) {

    
    return (
      <div>
          <ContentTag key={id}>{content}</ContentTag>
          {/* <TodoBtn>✅</TodoBtn>
          <TodoBtn>❌</TodoBtn> */}
      </div>
        
    )
}

export default TodoList
```

```js
// src/components/TodoCount.js
import React,{useContext} from 'react'
import {todoContext} from '../page/Home'
import styled from 'styled-components'


const CountTag = styled.div`
    color: #999;
    font-size: 18px;
    font-weight: bold;
    background-color: rgb(233, 226, 240);
    padding: 2rem;
    border-bottom-left-radius: 1em;
    border-bottom-right-radius: 1em;
`

function TodoCount() {

    const todos = useContext(todoContext)

    return (
        <CountTag>
            내가 할일 : {todos.length}
        </CountTag>
    )
}

export default TodoCount
```