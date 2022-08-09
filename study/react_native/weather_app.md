## Weather_app 만들기

만들면서 작업한 내용 정리하자!

```js
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      <View style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: "1",
    backgroundColor: "tomato",
  },
  city: {
    flex: "1.2",
    // backgroundColor: "blue",
    justifyContent: "center",
    alignItems: "center",
  },
  cityName: {
    fontSize: 68,
    fontWeight: "500",
  },
  weather: {
    flex: "3",
    // backgroundColor: "teal",
  },
  day: {
    flex: 1,
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "teal",
  },
  temp: {
    marginTop: 50,
    fontSize: 188,
  },
  des: {
    fontSize: 60,
  },
});
```

이번 작업에서 배운점은 css 레이아웃 작업과 스타일 적용법이다. 생각보다 쉽다!

<br />

## ScrollView

앱은 일정 아이템이나 요소들이 넘치는 경우 스크롤이 불가능하다. 그래서 ScrollView컴포넌트를 사용해서 스크롤 반응이 가능하다. 사용법은 스크롤 적용을 하고 싶은 자식 범위를 설정하여 그부모 컴포넌트에 ScrollView를 적용하면 된다. 아래 예시를 통해 기억하자!

```js
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      // ScrollView 컴포넌틑 안에서 스크롤 반응이 일어난다
      <ScrollView style={styles.weather}>
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
```

<br />

## horizontal

horizontal 적용시 옆으로 스크롤 가능! 다만 스타일적용을 위해선 contentContainerStyle 프롭스를 사용하여야 한다.

```js
<ScrollView horizontal contentContainerStyle={styles.weather}>
  <View style={styles.day}>
    <Text style={styles.temp}>28</Text>
    <Text style={styles.des}>Sunny</Text>
  </View>

  <View style={styles.day}>
    <Text style={styles.temp}>28</Text>
    <Text style={styles.des}>Sunny</Text>
  </View>

  <View style={styles.day}>
    <Text style={styles.temp}>28</Text>
    <Text style={styles.des}>Sunny</Text>
  </View>

  <View style={styles.day}>
    <Text style={styles.temp}>28</Text>
    <Text style={styles.des}>Sunny</Text>
  </View>

  <View style={styles.day}>
    <Text style={styles.temp}>28</Text>
    <Text style={styles.des}>Sunny</Text>
  </View>
</ScrollView>
```

<br/ >

### ScrollView 추가 프롭스 (자주 사용)

pagingEnabled는 페이지를 매끄럽게 해주는 기능을 제공한다. indicatorStyle는 케러셀 처럼 페이지가 넘어갈때 생기는 메뉴같은 기능이다. 색상 및 showsHorizontalScrollIndicator속성을 통해 제어가 가능하다.

```js
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.city}>
        <Text style={styles.cityName}>Seoul</Text>
      </View>
      // 중요 프롭스들
      <ScrollView
        pagingEnabled
        horizontal
        indicatorStyle="white"
        contentContainerStyle
        // showsHorizontalScrollIndicator={false}
        style={styles.weather}
      >
        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>

        <View style={styles.day}>
          <Text style={styles.temp}>28</Text>
          <Text style={styles.des}>Sunny</Text>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}
```

<br />

## 디바이스 넓이 가져오는 함수

Dimensions를 활용하면 디바이스 기종 즉 본인이 사용하고 있는 장치의 넓이 값을 가져올수 있다. 휴대폰의 기종이 각각 다르니 이걸 많이 이용하자!

```js
import { StatusBar } from "expo-status-bar";
import { ScrollView, StyleSheet, Text, View, Dimensions } from "react-native";

// 핸드폰 스크린 넓이 및 높이를 가져올수 있음
const { width: SCREEN_WIDTH } = Dimensions.get("window");
console.log(SCREEN_WIDTH);


// 생략 css
day: {
    // flex: 1,
    width: SCREEN_WIDTH,
    alignItems: "center",
    // justifyContent: "center",
    // backgroundColor: "teal",
  },
```
