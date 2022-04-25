## sprint airline review API

API 어떻게 호출하고 브라우저에 출력하는지 흐름을 파악하자

```js
import flightList from '../resource/flightList'
import fetch from 'node-fetch'

if (typeof window !== "undefined") {
  localStorage.setItem('flight', JSON.stringify(flightList));
}

export function getFlight(filterBy = {}) {

  let endpoint = 'http://ec2-13-124-90-231.ap-northeast-2.compute.amazonaws.com:81/flight?';
  if (filterBy.departure && filterBy.destination) {
    endpoint = endpoint + `departure=${filterBy.departure}&destination=${filterBy.destination}`;
    console.log(endpoint)
  }

  return fetch(endpoint)
  .then((resp) => {
    // console.log(resp)
    return resp.json() 
  })
  .then((data) => {
    // console.log(data)
    return data
  })
  .catch((err) => {
    console.log(`Error! ${err}`)
    return err
})
}
```

호출한 API 데이터를 상태관리 하여 리스트로 뿌려준다.

```js
import Head from 'next/head'
import { useEffect, useState } from 'react'
import { getFlight } from '../api/FlightDataApi'
import FlightList from './component/FlightList'
import LoadingIndicator from './component/LoadingIndicator'
import Search from './component/Search'
import Debug from './component/Debug'

import json from '../resource/flightList'

export default function Main() {
  const [condition, setCondition] = useState({
    departure: 'ICN'
  })
  const [flightList, setFlightList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

useEffect(()=>{
  setIsLoading(true)
  getFlight(condition)
  .then(result =>{
    // console.log(value)
    setFlightList(result)
    // console.log(result)
    setIsLoading(false)
  })
},[condition])

  const search = ({ departure, destination }) => {
    if (condition.departure !== departure || condition.destination !== destination) {
      console.log('condition 상태를 변경시킵니다')
      console.log('depar',departure)
      console.log('dest',destination)


      // TODO:
      setCondition(
        {departure, destination})
    }
  }


  global.search = search

  return (
    <div>
      <Head>
        <title>States Airline</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1>
          여행가고 싶을 땐, States Airline
        </h1>
        <Search onSearch={search}/>
        <div className="table">
          <div className="row-header">
            <div className="col">출발</div>
            <div className="col">도착</div>
            <div className="col">출발 시각</div>
            <div className="col">도착 시각</div>
            <div className="col"></div>
          </div>
          {isLoading? <LoadingIndicator />:<FlightList list={flightList} />}
        </div>
        <div className="debug-area">
          <Debug condition={condition} />
        </div>
      </main>
    </div>
  )
}
```

흐름은 알겠지만 아직도 혼자서 코드짜기엔 너무 부족하다.. 좀더 공부가 필요하다.