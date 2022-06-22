## swr사용법

SWR은 Nextjs 로 유명한 vercel 에서 만든 원격데이터 fetch 를 위한 커스텀 훅 npm 모듈이다. 리엑트에선 리덕스로 전역으로 데이터를 관리하는것이랑 비슷하다. 리덕스보다 더 나은점이 있다면 코드의 길이를 축소 시킬수 있으며 리덕스보다 비교적 간단하게 구현이 가능하다.

또한 useSWR은 한번 fetch 한 원격상태의 데이터를 내부적으로 캐싱된다. 즉 클라이언트에 잠시 저장을 해둔다.
다른 컴포넌트에서 동일한 상태를 사용하고자 할 경우, 이전에 캐시했던 상태를 그대로 리턴해준다.즉 원격에 있는 데이터가 마치 클라이언트에 존재하는 것처럼 사용할 수 있다

```js
// index.tsx
const {data, error} = useSWR('http://localhost:3095/api/users', fetcher);

if(error) return <div>failed to load</div>
if(!data) return <div>Loading..</div>
return <div>{data}</div>
```

useSWR 은 첫번째 인자로 원격상태에 대한 key 를, 두번째 인자로 데이터 fetch 함수를 받습니다.
첫번째 인자(주소)는 두번째 fetch 함수의 첫번째 인자로 전달됩니다.

fetch 함수가 데이터를 로드하면 해당 응답이 data 로 세팅되고 오류 발생시 해당 오류가 error 에 세팅됩니다.
컴포넌트에서는 data 와 error 상태에 따라 알맞게 결과를 렌더링 해주면 됩니다.

```js
// untill
import axios from 'axios';

const fetcher = (url: string) =>
  axios
    .get(url, {
      withCredentials: true,
    })
    .then((response) => response.data);

export default fetcher;
```


## 참고자료

자세한 내용은 아래 자료를 통해 학습하자!

[SWR란](https://basemenks.tistory.com/245)