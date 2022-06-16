# css

그냥 css작업 하면서 유용한거 정리하기!

## textarea 크기 고정하기

작업하다 textarea의 크기를 고정하고 싶을때가 있다. 이때 resize 속성을 활용하자. 추가적으로 textarea안에 있는 글자를 바꾸고 싶을때는 
::placeholder을 사용하고 포커스를 주고 싶지 않을땐 focus에 outline:none을 쓰자!

```css
.textareaForm{
            border: 1px solid #CBCBCB;
            >textarea{
                height: 200px;
                width: 100%;
                border: none;
                resize: none;
                padding: 20px;
                font-size: 1rem;
            }
            >textarea::placeholder{
                color: #969696;
            }
            >textarea:focus {
                outline: none;
            }
        }
```

<br />

## input태그 안에 아이콘 넣기

가끔 input태그 안에 돋보기 같은 아이콘을 넣고 싶을때가 있다. 찾아본 방법으로는 유니콘?기호나 폰트어썸을 활용해서 사용하는 방법이 있었고 그냥 자체적으로 이미지Url을 활용해서 넣는 
방법도 있었다. 하지만 이번에 정리할 방법은 정말 간단하다. 그냥 아이콘의 넓이길게 하고 그안에 인풋이 들어가고 인풋 볼더를 없애면 된다. ㄷㄷ 발상의 전환

```html
             <div className='profileInput'>
                  <div className='iconInput'>
                        <SearchIcon/> // 아이콘
                  <input placeholder='검색'/>
            </div>
                 
             <input disabled/>
           </div>

```

```css
//스타일 컴포넌트로 하였음
.iconInput{
                margin-bottom: 20px;
                width: 470px;
                height: 55px;
                padding: 10px;
                border-radius: 5px;
                border: 1px solid #CBCBCB;
                display: flex;
                align-items: center;
                color: #333333;
            >input{
                width: 350px;
                border: none;
                -webkit-appearance: none;
                margin-left: 10px;
                overflow: auto; 
                }
                 input::placeholder{
                 color: #333333;
                }
            }
```



