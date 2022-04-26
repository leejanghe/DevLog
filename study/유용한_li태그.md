## 알만하면 좋은 CSS li태그

작업하다가 li태그에 있는 마크와 문자 사이 간격을 조절하고 싶은 경우가 있다. 또한 li 마커 스타일링도 줄 수 있다.

<br />

### 마커 만들기

::marker 의사 요소 마커 상자는 모든 목록 항목 요소 내에서 실제 내용과 ::before 의사 요소 앞에 자동으로 생성된다.

```css
li::before {
  content: "::before";
  background: lightgray;
  border-radius: 1ch;
  padding-inline: 1ch;
  margin-inline-end: 1ch;
}
```

<br />

일반적으로 목록 항목은 <li> HTML 요소입니다. 그러나 다른 요소도 display: list-item을 사용하면 목록 항목이 될 수 있습니다.

```html
<dl>
  <dt>Lorem</dt>
  <dd>Lorem ipsum dolor sit amet consectetur adipisicing elit</dd>
  <dd>Dolores quaerat illo totam porro</dd>

  <dt>Ipsum</dt>
  <dd>Quidem aliquid perferendis voluptates</dd>
</dl>
```
```css
dd {
  display: list-item;
  list-style-type: "🤯";
  padding-inline-start: 1ch;
}
```

<br />

### 마커스타일링

::marker 전까지는 list-style-type 및 list-style-image를 사용하여 목록 스타일을 지정하고 CSS 한 줄로 목록 항목 기호를 변경할 수 있었습니다.

```js
li {
  list-style-image: url(/right-arrow.svg);
  /* OR */
  list-style-type: '👉';
  padding-inline-start: 1ch;
}
```

이것만 알아도 li태그를 자유롭게 사용 할 수 있다. 기억 안나면 아래 참고 사이트를 통해 또 사용해보자!

[참고사이트](https://web.dev/i18n/ko/css-marker-pseudo-element/)