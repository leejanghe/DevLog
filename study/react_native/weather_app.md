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
