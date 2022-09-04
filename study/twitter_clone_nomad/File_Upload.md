## 파일 업로드하기

### 이미지 삽입 및 제거하기

공식문서를 확인하면 아래 코드를 이해하기 쉽다. 설명은 주석에!

[파일읽기](https://developer.mozilla.org/ko/docs/Web/API/FileReader)
[파일읽기데이터URL](https://developer.mozilla.org/ko/docs/Web/API/FileReader/readAsDataURL)

```js
  const [attachment, setAttachment] = useState();

    const onFileChange = (event) => {

    // 1. es6문법을 활용해서 files를 가져온다.
    const {
      target: { files },
    } = event;

    // 2. files[0] 콘솔확인!
    const theFile = files[0];

    // 3. new FileReader() 파일을 읽을수 있도록 도와주는 메서드로 생각!
    const reader = new FileReader();

    // 5. onloadend를 활용해서 해당 url을 상태관리 함수에 저장해서 표현!
    reader.onloadend = (finishedEvent) => {
      console.log("finishedEvent", finishedEvent);
      const {
        currentTarget: { result },
      } = finishedEvent;
      setAttachment(result);
    };

    // 4. 해당 파일에 대한 url을 만들어 준다!
    reader.readAsDataURL(theFile);
  };
  const onClearAttachment = () => setAttachment(null);

  ///...생략
  <input type="file" accept="image/*" onChange={onFileChange} />
        <input type="submit" value="Nweet" />
        {attachment && (
          <div>
            <img src={attachment} width="50px" height="50px" />
            <button onClick={onClearAttachment}>Clear</button>
          </div>
        )}
```
