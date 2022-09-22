## axios 연습

fetch대신 axios를 사용해서 데이터를 불러오자!

```js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Users() {
  const [users, setUsers] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchUsers = async () => {
    try {
      // 요청이 시작 할 때에는 error 와 users 를 초기화하고
      setError(null);
      setUsers(null);
      // loading 상태를 true 로 바꿉니다.
      setLoading(true);
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setUsers(response.data); // 데이터는 response.data 안에 들어있습니다.
    } catch (e) {
      setError(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  if (loading) return <div>로딩중..</div>;
  if (error) return <div>에러가 발생했습니다</div>;
  if (!users) return null;
  return (
    <>
      <ul>
        {users.map((user) => (
          <li key={user.id}>
            {user.username} ({user.name})
          </li>
        ))}
      </ul>
      <button onClick={fetchUsers}>다시 불러오기</button>
    </>
  );
}
export default Users;
```

## axios 복기

확실히 계속 만들어보고 적용해보니 axios 사용법이 익숙해진 느낌이다.
간단히 정리하자!

### get요청

그냥 단순데이터 요청이나 사용자 아이디값 즉 파라미터에 데이터를 포함시켜 보낼 수가 있다.

```js
axios.get(url, [, config]);
```

### post 요청

메세지 바디에 포함시켜 보낸다. 대게 두번째 인자에 데이터를 넣어서 보낸다.

```js
axios.post(url, data, [, config]);
```

### put 요청

db에 저장된 내용을 수정하는 목적으로 사용한다. get에서 post과정을 거쳐 post 메서드와 비슷한 형태다

```js
axios.put(url, data, [, config]);
```

### delete 요청

일반적으로 body가 비워져있으며 db에 저장되어 있는 내용을 삭제한다.

```js
axios.delete(url, [, config]);
```

개념 정리와 블로글을 지속적으로 보면서 실제로 작업을 하다보니 정말 쉽게 느껴진다! 또 까먹으면 또 보고 정리하자!

[참고자료](https://inpa.tistory.com/entry/AXIOS-%F0%9F%93%9A-%EC%84%A4%EC%B9%98-%EC%82%AC%EC%9A%A9)
