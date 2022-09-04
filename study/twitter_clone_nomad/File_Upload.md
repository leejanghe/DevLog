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

<br />

### storge 파일업로드 하기

[storage](https://firebase.google.com/docs/reference/js/v8/firebase.storage.Storage)

storge에서 ref는 구글 클라우드 저장 객체이다. 업로드, 다운로드 삭제가 가능하다. 또한 ref에는 다양한 메서드가 있다. 대표적으로 child가 있고 기본적으로 path로 설정할수 있다. (이미지 경로)

```js
// fbase.js
// stroage 임포트
import "firebase/storage";
//..생략

export const storageService = firebase.storage();
```

그리고 임의로 아이디 값을 부여하고 싶다면 uuid를 설치하자

```
npm i uuid
```

storageService.ref().child() 사용함으로서 파일에 대한 레퍼런스를 같게 된다. 그런다음 레퍼런스를 첨부하기 위해서 putString()메서드를 사용하면 된다. 인자로는 이미지 url경로와 포맷을 하기위해 두번째 인자에 'data_url'을 입력하면 끝!

```js
import { v4 as uuidv4 } from "uuid";
import { dbService, storageService } from "fbase";

//...생략
const fileRef = storageService.ref().child(`${userObj.uid}/${uuidv4()}`);
const response = await fileRef.putString(attachment, "data_url");
console.log(response);
```
