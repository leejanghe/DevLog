## dom이란

DOM(Document Object Model)은 웹 페이지를 이루는 태그들을 자바스크립트가 이용할 수 있게끔 브라우저가 트리구조로 만든 객체 모델을 의미한다.
DOM(Document Object Model)을 영어 뜻풀이 그대로 하자면 문서 객체 모델을 의미한다.
문서 객체란 html, head, body와 같은 태그들을 javascript가 이용할 수 있는 (메모리에 보관할 수 있는) 객체를 의미한다.



## 자바스크립트는 어떻게 HTML 태그들을 조종할 수 있는 걸까?
- Document라는 전역 객체를 통해 접근
- window라는 객체는 document객체의 상위에 위치
