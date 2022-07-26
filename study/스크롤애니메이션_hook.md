## 스크롤 에니메이션 훅

스크롤 에니메이션 훅이다. 나중에 요긴하게 써먹자!

```js
import { useCallback, useEffect, useRef } from "react";

const useScrollFadeIn = (direction = "up", duration = 1, delay = 0) => {
  const element = useRef();

  const handleDirection = (name) => {
    switch (name) {
      case "up":
        return "translate3d(0, 50%, 0)";
      case "down":
        return "translate3d(0, -50%, 0)";
      case "left":
        return "translate3d(50%, 0, 0)";
      case "right":
        return "translate3d(-50%, 0, 0)";
      default:
        return;
    }
  };

  const handleScroll = useCallback(([entry]) => {
    const { current } = element;
    // console.log("entry", entry.isIntersecting)
    if (entry.isIntersecting) {
      current.style.transitionProperty = "all";
      current.style.transitionDuration = `${duration}s`;
      current.style.transitionTimingFunction = "cubic-bezier(0, 0, 0.2, 1)";
      current.style.transitionDelay = `${delay}s`;
      current.style.opacity = 1;
      current.style.transform = "translate3d(0, 0, 0)";
    } else {
      current.style.transform = handleDirection(direction);
      current.style.opacity = 0;
      // current.style.transform = 'translate3d(0, -50%, 0)'
    }
  }, []);

  useEffect(() => {
    let observer;
    const { current } = element;
    // console.log("isIntersecting", current)
    if (current) {
      observer = new IntersectionObserver(handleScroll, { threshold: 0.5 });
      observer.observe(current);

      return () => observer && observer.disconnect();
    }
  }, [handleScroll]);

  return {
    ref: element,
    style: {
      opacity: 0,
      transform: handleDirection(direction),
    },
  };
};

export default useScrollFadeIn;
```

## 주의

개인이 만든 훅은 반복문에서는쓸수가 없다. 그점 유의 하면서 사용하자. 자세한 내용은 아래를 확인하자!

[참고](https://ko.reactjs.org/docs/hooks-rules.html)
