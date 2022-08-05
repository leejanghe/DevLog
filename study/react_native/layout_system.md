## layout system

네이티브 css는 딱 한가지만 기억하면 된다. 바로 flex이다. 웹 기준에선 grid도 사용하지만 앱은 flex하나만 기억하면 어떤 css도 구현이 가능하다. 뿐만 아니라 flexDirection의 기본값은 컬럼이다. 웹은 row지만 이부분만 기억하면 된다.

```js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ width: 200, height: 200, backgroundColor: "teal" }}></View>
      <View style={{ width: 200, height: 200, backgroundColor: "red" }}></View>
      <View style={{ width: 200, height: 200, backgroundColor: "blue" }}></View>
      <View
        style={{ width: 200, height: 200, backgroundColor: "green" }}
      ></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    // flexDirection: "row",
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

<br />

### flex

네이티브에서 어떤 컴포넌트를 꼭 width와 heigth를 꼭 지정할 필요가 없다. 휴대폰 기종에 따라 사이즈가 다르게 표현되기 떄문이다. 그래서 flex를 사용하여 비율로 반응형을 표현해주는것이 바람직하다. 간단한 예제로 부모 컨테이너에 flex:1주고 하위 뷰에도 똑같이 flex:1을 주면 비율에 맞게 화면을 다채울수있다.

```js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ flex:"1", backgroundColor: "teal" }}></View>
      <View style={{ flex:"1", backgroundColor: "red" }}></View>
      <View style={{ flex:"1", backgroundColor: "blue" }}></View>
      <View style={{ flex:"1", backgroundColor: "green" }}></View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:'1'1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
```

여기서 중요한점은 부모컨테이너에 flex를 설정해야한다는 점이다. 그러면 자식 컨테이너에 flex가 휴대폰의 사이즈에 맞게 비율이 측정되어 그리드를 조절 할 수 있다. (부모는 아무값을 줘도 상관없음 자식 비율에 의해 화면이 표현된다. 다만 자식의 플랙스를 사용하기 위해선 부모 컨테이너에 flex를 설정하자!)
