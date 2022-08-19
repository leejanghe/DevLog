## Todolist_app 만들기

---

### Touchables

오늘 공부한것은 터치에 관한 것이다. 대표적으로 TouchableOpacity,TouchableHighlight,TouchableWithoutFeedback,Pressable, 등이 있다. 대표적으로 TouchableOpacity를 쓰는데 편리하다. 자세한 설명은 공식문서를 확인해서 공부해보고 적용해보자.

```js
import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
} from "react-native";
import { theme } from "./colors";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity>
          <Text style={styles.btnText}>Work</Text>
        </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.btnText}>Travel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: theme.bg,
    paddingHorizontal: 20,
  },
  header: {
    justifyContent: "space-between",
    flexDirection: "row",
    marginTop: 100,
  },
  btnText: {
    fontSize: 38,
    fontWeight: "600",
    color: "white",
  },
});
```

<br />

### 상태에 따른 스타일 적용

네이티브에서 스타일을 적용할때 ...문법을 사용하면 기존 스타일링에 더 추가로 스타일을 적용 시킬 수 있다.

```js
export default function App() {
  const [working, setWorking] = useState(true);

  const travel = () => setWorking(false);
  const work = () => setWorking(true);

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.header}>
        <TouchableOpacity onPress={work}>
          <Text
            style={{ ...styles.btnText, color: working ? "white" : theme.grey }}
          >
            Work
          </Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={travel}>
          <Text
            style={{
              ...styles.btnText,
              color: !working ? "white" : theme.grey,
            }}
          >
            Travel
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
```

추가적으로 onPress는 웹에서 onClick과 비슷한 개념이라고 생각하자!

<br />

### TextInput

웹에서는 textarea나 input태그를 통해 글을 작성할수 있다. 하지만 네이티브에선 오직 textInput태그를 통해 글을 작성할수있다. 또 한 다양한 프롭스가 있어서 내가 원하는 프롭스를 골라서 사용 할 수 있다. 아래 링크를 통해 다양하게 적용해보자.

[textinput](https://reactnative.dev/docs/textinput)

```js
//..생략
const [text, setText] = useState("");
const onChangeText = (payload) => setText(payload);
// const onChangeText = (payload) => console.log(payload);

<View>
  <TextInput
    onChangeText={onChangeText}
    value={text}
    placeholder={working ? "Add to do" : "Where do you want to go?"}
    style={styles.input}
  />
</View>;
```

<br />
