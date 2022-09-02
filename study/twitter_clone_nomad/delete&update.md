## 트윗 삭제 및 업데이트

### realtime 실시간 트윗

---

fireStore에서 onSnapshot을 활용하면 실시간으로 트윗을 주고 받을수가 있다.
[공식문서](https://firebase.google.com/docs/reference/js/v8/firebase.firestore.CollectionReference)
[스냅샵](https://firebase.google.com/docs/reference/js/v8/firebase.firestore.QueryDocumentSnapshot)

```js
import React, { useState, useEffect } from "react";
import { dbService } from "fbase";
import Nweet from "../components/Nweet";
const Home = ({ userObj }) => {
  const [nweet, setNweet] = useState("");
  const [nweets, setNweets] = useState([]);

  useEffect(() => {
    // 실시간으로 데이터를 디비에서 가져오기
    // 디비서비스에서 nweets라는 컬랙션에서 onSnapshot을 사용한다!
    // onSnapshot 을 콘솔을 찍어보면 QueryDocumentSnapshot 값을 반환해준다. 이값들 반환하려면 data()로 불러와야한다 공식문서 스냅샵 참고
    dbService.collection("nweets").onSnapshot((snapshot) => {
      const nweetArray = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setNweets(nweetArray);
    });
  }, []);

  // 트위터 추가 매서드 add()
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.collection("nweets").add({
      text: nweet,
      createdAt: Date.now(),
      creatorId: userObj.uid,
    });
    setNweet("");
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNweet(value);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input
          value={nweet}
          onChange={onChange}
          type="text"
          placeholder="What's on your mind?"
          maxLength={120}
        />
        <input type="submit" value="Nweet" />
      </form>
      <div>
        {nweets.map((nweet) => (
          <Nweet
            key={nweet.id}
            nweetObj={nweet}
            isOwner={nweet.creatorId === userObj.uid}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
```

<br />

### delete & update

[업데이트](https://firebase.google.com/docs/reference/js/v8/firebase.firestore.DocumentReference#update)
[삭제](https://firebase.google.com/docs/reference/js/v8/firebase.firestore.DocumentReference#delete)

공식문서를 보면 삭제는 그냥 뒤에 delete()를 사용하면 되고 업데이트는 update(data : UpdateData) 구조다

```js
import React, { useState } from "react";
import { dbService } from "fbase";

const Nweet = ({ nweetObj, isOwner }) => {
  const [editing, setEditing] = useState(false);
  const [newNweet, setNewNweet] = useState(nweetObj.text);
  const onDeleteClick = async () => {
    const ok = window.confirm("Are you sure you want to delete this nweet?");
    if (ok) {
      await dbService.doc(`nweets/${nweetObj.id}`).delete();
    }
  };
  const toggleEditing = () => setEditing((prev) => !prev);
  const onSubmit = async (event) => {
    event.preventDefault();
    await dbService.doc(`nweets/${nweetObj.id}`).update({
      text: newNweet,
    });
    setEditing(false);
  };
  const onChange = (event) => {
    const {
      target: { value },
    } = event;
    setNewNweet(value);
  };
  return (
    <div>
      {editing ? (
        <>
          <form onSubmit={onSubmit}>
            <input
              type="text"
              placeholder="Edit your nweet"
              value={newNweet}
              required
              onChange={onChange}
            />
            <input type="submit" value="Update Nweet" />
          </form>
          <button onClick={toggleEditing}>Cancel</button>
        </>
      ) : (
        <>
          <h4>{nweetObj.text}</h4>
          {isOwner && (
            <>
              <button onClick={onDeleteClick}>Delete Nweet</button>
              <button onClick={toggleEditing}>Edit Nweet</button>
            </>
          )}
        </>
      )}
    </div>
  );
};

export default Nweet;
```
