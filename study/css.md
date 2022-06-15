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
