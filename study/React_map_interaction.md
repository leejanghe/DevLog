## React-map-interaction

처음 써봤는데 괜찮은 라이브러리인것같다. 약간 줌 같은 느낌인데 확대 축소가 가능하며 지도에 많이 쓰는 것 같다. 사용법도 그렇게 어렵지 않고 커스텀해서 사용하면 괜찮게 사용 할 수 있을 것 같다.

<br />

### ex)코드

```js
import React from 'react'
import {MapInteractionCSS} from 'react-map-interaction'


function ZoomImage() {
    return (

        <MapInteractionCSS>
            <img src="https://i2.wp.com/magazine.contenta.co/wp-content/uploads/2015/12/%EB%8C%80%EC%84%9C%EC%96%91%EC%A4%91%EC%8B%AC.gif" alt="img" /> 
        </MapInteractionCSS>
   
    )
}

export default ZoomImage
```

자세한 내용은 아래 사이트에서 확인해보자.

[참고사이트](https://www.npmjs.com/package/react-map-interaction)