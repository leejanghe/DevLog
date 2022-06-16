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

<br />

## 내가 원한는 위치로 겹치게 하고 싶을때...

때론 태그와 태그가 겹치면서 내가 원하는 곳으로 이동하고 싶을때가 있다. 이때 position만 잘사용하면 끝
정말 쉽게 말해 부모태그에 position: relative; 속성을 걸고 움직이고 싶은 자식에다 position: absolute; 걸면 부모태그 범위 내에서 top, bottom, left, right를 활용하여 이동할수 있다. 꼭 알아두자!



```html
            <div className='profileImg'>
             <p>프로필 사진</p>
             <span><AccountCircleIcon/><span><EditIcon/></span></span>
            </div>
```


```css
.profileImg{
            display: flex;
            align-items: center;
            position: relative;
            >span{
                cursor: pointer;
                margin-left: 70px;
                >svg{
                    color: #48BEDF;
                    font-size: 180px;
                    
                }
                >span{
                    position: absolute;
                    color: #9B9B9B;
                    background-color: white;
                    border: 2px solid #9B9B9B;
                    border-radius: 50%;
                    left: 269px;
                    bottom: 15px;
                    cursor: pointer;
                    >svg{
                        padding: 5px;
                        padding-bottom: 1px;
                        width: 35px;
                        height: 35px;
                    }
                }
            }
        }
```

