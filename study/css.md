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

<br />

## scss 클래스명 이중으로 쓰기

css 스타일을 재사용 할 때 공통으로 작업하는 도중 일부는 다르게 하고 싶을때가 있다. 이때 공통으로 사용하는 클래스명에 띄어쓰기를 해서 추가하는 방법이 있다.
아래 예시 참고

```html
// 클래스명 certificationInputTex에 addfile을 추가
<div className='certificationInputText addfile'>
           <p>위에 addfile 추가한 경우</p>

           <div>
           <label className="addFileBtn">
                        <input type="file" name="uploadFile" id="" accept=".pdf" />
                        <AttachFileIcon /> 파일 첨부하기
           
            </label>
          <div className='inputGuide'>
             <p>인증 서류 제출 가이드</p>
                <li>이미지 파일(jpg, png, gif, bmp)만 첨부 가능합니다.</li>
                <li>제출된 파일은 신원 확인 후 즉시 삭제합니다.</li>
          </div>
           </div>
        </div>
```

위와 같이 띄어쓰기를 하여 클래스명을 추가하면 css에서 공통으로 쓰고 있는 클래스명 안에 &기호를 써서 스타일을 적용 할 수 있다. 

```css
// certificationInputText안에 &기호를 붙여서 이어주면 끝
.certificationInputText{

...생략
&.addfile{
                    display: grid;
                    grid-template-columns: 150px 450px;
                    align-items: flex-start;
                    >p{
                        margin-top: 12px;
                    }
            .addFileBtn {
                @include flex-content();
                @include border-div-default(50px,100%){
                    cursor: pointer;
                    color: $light-blue;
                    background-color: #F5FCFE;
                };
                > input {
                    width: 0;
                }
                > svg {
                    margin-right: 5px;
                }
                &:hover {
                    background-color: $light-blue;
                    color: white;
                }
             }
             .inputGuide{
                @include border-div-default(100px,100%){
                    cursor: pointer;
                    background-color: #F9F9F9;
                    font-weight: 300;
                    padding: 15px;
                    >p{
                        color: #FF9100;
                        font-weight: 500;
                        margin-bottom: 5px;
                    }
                    >li{
                        color: #333333;
                        // margin-top: 10px;
                        font-size: 14px;
                    }
                };
             }
          }


}
```

<br />

## 정 중앙 정렬 코드

옛날에도 정리하였지만 여기에 따로 정리하자! 나중에 모달같은거 만들때 유용하니 자주 써먹자!!#!

```css
export const LoginWrapper = styled.div`
display: flex;
position: fixed;
top: 50%;
left: 50%;
-webkit-transform: translate(-50%, -50%);
-moz-transform: translate(-50%, -50%);
-ms-transform: translate(-50%, -50%);
-o-transform: translate(-50%, -50%);
transform: translate(-50%, -50%);
`
```

<br />

## 버튼 인터렉티브!

버튼에 호버뿐만 아니라 active효과에 transform속성을 주면 버튼의 스케일을 변화 시킬 수 있다. 인터렉티브한 버튼을 만들때 참고하자!@

```css
>button{
    background:#48BEDF;
    padding:15px;
    color:#fff;
    border-radius: 5px;
    border:none;
    margin-top:10px;
    cursor:pointer;
    &:active{
        transform: scale(.99);
    }
}
```

<br />

## 클래스명 상태 조건에 따라 스타일 달리하기

리엑트에서 상태관리 함수를 활용해서 클래스명에 상태를 부여하여 조건에 따른 css를 꾸밀수 있다.

```js
const [workShowImg, setWorkShowImg] =useState(true)

//... 생략

<div className={`UploadImgWrapper ${workShowImg === false ? 'noLine':''}`}>
                        {imageIdList!==undefined ? imageIdList.map(img => (
                            <img key={img.id} src={img.path} onClick={deletePDFfile}/>
                            
                        )) : '' }
</div>
```

위에 클래스명과 같이 workShowImg의 상태가 false값이면 클래스명 noLine을 추가해서 사용할 수 있다.
noLine을 사용하려면 css는 아래와 같이 사용하면 된다.

```css
.UploadImgWrapper {
                &.noLine{
                    border: none;
                }
                width: 90%;
                min-height: 400px;
                height: auto;
                border: 2px dashed #48BEDF;
                border-radius: 5px;
                padding: 15px;
                margin: 10px 0;
                display: flex;
                align-items: center;
                justify-content: center;
                flex-direction: column;
                }
            }
            //...생략
```
위와 같이 클래스명 중첩사용시 해당 클래스명안에 &.기호를 사용해서 사용하면 된다. 이렇게 되면
 workShowImg의 상태가 false값이면 볼더값은 사라지게 된다.

<br />

## html 깨알 팁, 태그안 띄어쓰기

 &nbsp; 기호를 쓰면 태그안에 있는 띄어쓰기가 가능해진다. 나중에 텍스트 작업할때 유용하게 사용하자.

```js
// 과와 개인정보 사이 띄어쓰기가 안된다 ㅠㅠ
<p><span>서비스 이용약관</span>과 <span>개인정보 수집 및 이용</span>에 동의합니다.</p>

// 띄어쓰기 하려면 아래와 같이 &nbsp; 를 사용하자! 개당 띄어스기 한번 갯수이다.
<p><span>서비스 이용약관</span>과&nbsp;<span>개인정보 수집 및 이용</span>에 동의합니다.</p>
```

<br />

## react-router-dom에서 Link태그 css안먹힐때! (스타일컴포넌트)

styled(Link)``;를 해주면 Link의 모든 속성을 inherit하면서 새로운 속성을 더해줄 수 있다.

```js
// 기존 안먹힘

//..생략
>span{
        cursor:pointer;
        color:#48BEDF;
        text-decoration:underline;
    }
    .link{
        color:#48BEDF;
    }
    //...생략
}

<p>이미 아이디가 있으신가요? <span className='link'><Link to="/login">로그인</Link></span></p>
```

```js
// 먹힘 
//..생략
const StyledLink = styled(Link)`
cursor:pointer;
color:#48BEDF;
text-decoration:underline;
`
//..생략
<p>이미 아이디가 있으신가요? <span className='link'><StyledLink to="/login">로그인</StyledLink></span></p>
```

<br />

## pre태그를 사용시 줄바꿈이 되지 않는 현상

pre 태그는 내부에 있는 글을 “그대로”보여주는 특징이 있어, width가 넘어가도 줄바꿈이 되지 않는다.
이때는 pre 태그 css에 white-space: pre-wrap를 추가해준다.
(+width 가 지정되어 있어야 한다)

```css
  white-space: pre-wrap;
  word-break: break-all;
  overflow: auto;
```

<br />

## 다음은 뭐?










