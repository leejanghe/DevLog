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
