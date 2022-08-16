## collapsible

collapsible만드는 방법이다. 아래 코드를 참고하고 리엑트로 구현해보자!

```js
<!DOCTYPE html>
<html>
<head>
<meta name="viewport" content="width=device-width, initial-scale=1">
<style>
.collapsible {
  background-color: #777;
  color: white;
  cursor: pointer;
  padding: 18px;
  width: 100%;
  border: none;
  text-align: left;
  outline: none;
  font-size: 15px;
}

.active, .collapsible:hover {
  background-color: #555;
}

.content {
  padding: 0 18px;
  display: none;
  overflow: hidden;
  background-color: #f1f1f1;
}
</style>
</head>
<body>

<h2>Collapsibles</h2>

<p>A Collapsible:</p>
<button type="button" class="collapsible">Open Collapsible</button>
<div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<p>Collapsible Set:</p>
<button type="button" class="collapsible">Open Section 1</button>
<div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button type="button" class="collapsible">Open Section 2</button>
<div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>
<button type="button" class="collapsible">Open Section 3</button>
<div class="content">
  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
</div>

<script>
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
</script>

</body>
</html>
```

<br />

추가내용

## 리엑트로 구현하기

우선 화면을 보여줄수있는 상태와 맵으로 뿌린 각각의 데이터에 대한 아이디값의 상태를 관리 할 수 있도록 해준다.
그리고 어떠한 id값을 클릭했을 때 showCollapsible의 상태값이 false일때 true로 바꿔주면서 화면에 보이게 하고 해당 아이디값을
setShowDetailData 상태 관리 함수에 넣어주고 아니면 반대로 해준다.

```js
//...생략
// Collapsible table
const [showCollapsible, setShowCollapsible] = useState(false);
const [showDetailData, setShowDetailData] = useState("");

const onClickShowData = (id) => {
  if (!showCollapsible) {
    setShowCollapsible(true);
    setShowDetailData(id);
  } else {
    setShowCollapsible(false);
    setShowDetailData("");
  }
};
//...생략
```

```js
///...생략
{
  listShow
    ? currList.map((item) => (
        <>
          <div key={item.id} className="withdrawalSummaryItem client">
            <p>{item.staDt}</p>
            <p>{item.regDt}</p>
            <p>{item.title}</p>
            <p>{item.amount}</p>

            {item.status === "PAYMENT_STATUS_001" ? (
              <div className="statusClient">
                <p className={`statusValue ${item.status}`}>거래 중</p>
                <span onClick={() => onClickShowData(item.id)}>
                  <KeyboardArrowDownIcon />
                </span>
              </div>
            ) : item.status === "PAYMENT_STATUS_002" ? (
              <div className="statusClient">
                <p className={`statusValue ${item.status}`}>거래 완료</p>
                <span onClick={() => onClickShowData(item.id)}>
                  <KeyboardArrowDownIcon />
                </span>
              </div>
            ) : (
              ""
            )}
          </div>
          {showDetailData === item.id && showCollapsible && (
            <CollapsibleData id={item.id} />
          )}
        </>
      ))
    : "";
}
//...생략
```

여기서 중요한 내용은 ` showDetailData === item.id && showCollapsible && <CollapsibleData id={item.id}/>` 이다. 이한줄로 각각의 아이디 값에 대한 상태를
반영해주기 때문에 버튼을 클릭했을때 전체가 나오는 것이 아닌 해당 아이디 값에 대한 UI만 나오게 된다. 나중에 또 써먹어야 겠다.

---

추가

### 비슷한 개념 토글

collapsible을 구현하면서 비슷한 개념인 토글이 있다. 이건 상태 관리만 생각해두자

```js

const [showBox, setShowBox] = useState(false)


const onClickToggleBtn = () => {
  setShowBox(showBox => !showBox); // on, off 개념
}

// 대충 기입
<button onClick={onClickToggleBtn}>열고닫고~</button>
{
  showBox && (버튼 클릭에 의해 열고 닫고~)
}
```
