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

### todos

이번공부에선 inputtext 프롭스에서 onSubmitEditing={함수}, returnKeyType="done" 기억하자!! 그리고 Object.assign({},target, obj)는 객체를 쉽게 복사하고 합칠수 있는 문법이다. 물론 이문법 말고 rest문법을 사용해도 좋다!

```js
export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  const onChangeText = (payload) => setText(payload);
  // const onChangeText = (payload) => console.log(payload);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);

  const addToDo = () => {
    if (text === "") {
      return;
    }
    const newToDos = Object.assign({}, toDos, {
      [Date.now()]: { text, work: working },
    });

    // ...문법 활용예시
    const newToDos = { ...toDos, [Date.now()]: { text, work: working } };
    setToDos(newToDos);
    setText("");
  };

  console.log(toDos);
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
      <View>
        <TextInput
          onSubmitEditing={addToDo}
          onChangeText={onChangeText}
          returnKeyType="done"
          value={text}
          placeholder={working ? "Add to do" : "Where do you want to go?"}
          style={styles.input}
        />
      </View>
    </View>
  );
}
```

<br />

### Paint to dos

Object.keys 즉 객체를 map핑 하는 방법만 주의 깊게 보자!

```js
//.. 생략
<ScrollView>
  {Object.keys(toDos).map((key) => (
    <View style={styles.toDo} key={key}>
      <Text style={styles.toDoText}>{toDos[key].text}</Text>
    </View>
  ))}
</ScrollView>
//.. 생략
```

<br />

### AsyncStorage 저장하는 방법

아래 명령어를 통해 asyncStorage를 설치하자

[AsyncStorage문서](https://docs.expo.dev/versions/v46.0.0/sdk/async-storage/)

```
expo install @react-native-async-storage/async-storage
```

```js
// todos key설정
const STORAGE_KEY = "@toDos";

// 우선 설치한 AsyncStorage를 임포트를 해준다
import AsyncStorage from "@react-native-async-storage/async-storage";

// useEffect를 통해 저장된 정보를 불러온다.
useEffect(() => {
  loadToDos();
}, []);

// setItem를 통해 todos를 저장해준다.
const saveToDos = async (toSave) => {
  await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
};

// getItem를 통해 저장된 todos를 가져와서 parse작업
// 될수있으면 try catch문을 작성해서 오류 방지
const loadToDos = async () => {
  const s = await AsyncStorage.getItem(STORAGE_KEY);
  setToDos(JSON.parse(s));
  console.log("저장된거", s);
  s !== null ? setToDos(JSON.parse(s)) : null;
};

const addToDo = async () => {
  if (text === "") {
    return;
  }

  const newToDos = { ...toDos, [Date.now()]: { text, working } };

  setToDos(newToDos);
  // 저장
  await saveToDos(newToDos);
  setText("");
};
```

여기서 parse는 json문자열을 파싱하는것 쉽게 말해 자바스크립트 객체로 변환, stringify는 자바스크립트 객체를 json문자열로 변환. 헷갈리지 말자!

<br />

### delete todos & alert

웹에선 UI상 쓰지 않던 alert을 네이티브에서는 alert을 많이 활용한다. 심지어 네이티브에선 프롭스를 넣어 매력적으로 활용 할 수 있다. 사용법은 아래 공식문서를 참고하자!

[alert 문서](https://reactnative.dev/docs/alert)

```js
const deleteToDo = (key) => {
  Alert.alert("Delete To Do", "Are you sure?", [
    { text: "Cancel" },
    {
      text: "I'm Sure",
      style: "destructive",
      onPress: () => {
        const newToDos = { ...toDos };
        delete newToDos[key];
        setToDos(newToDos);
        saveToDos(newToDos);
      },
    },
  ]);
};

// ... 생략
<TouchableOpacity onPress={() => deleteToDo(key)}>
  <Fontisto name="trash" size={18} color={theme.grey} />
</TouchableOpacity>;
```

<br />

### 전체 코드

todo 완성, 추가적으로 첼린지 해보자@!

```js
import { StatusBar } from "expo-status-bar";
import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TouchableHighlight,
  TouchableWithoutFeedback,
  Pressable,
  TextInput,
  Alert,
  ScrollView,
} from "react-native";
import { Fontisto } from "@expo/vector-icons";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { theme } from "./colors";

const STORAGE_KEY = "@toDos";

export default function App() {
  const [working, setWorking] = useState(true);
  const [text, setText] = useState("");
  const [toDos, setToDos] = useState({});
  useEffect(() => {
    loadToDos();
  }, []);
  const onChangeText = (payload) => setText(payload);
  // const onChangeText = (payload) => console.log(payload);
  const travel = () => setWorking(false);
  const work = () => setWorking(true);

  const saveToDos = async (toSave) => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(toSave));
  };
  const loadToDos = async () => {
    const s = await AsyncStorage.getItem(STORAGE_KEY);
    setToDos(JSON.parse(s));
    console.log("저장된거", s);
    s !== null ? setToDos(JSON.parse(s)) : null;
  };

  const addToDo = async () => {
    if (text === "") {
      return;
    }
    // const newToDos = Object.assign({}, toDos, {
    //   [Date.now()]: { text, work: working },
    // });
    const newToDos = { ...toDos, [Date.now()]: { text, working } };

    setToDos(newToDos);
    await saveToDos(newToDos);
    setText("");
  };

  const deleteToDo = (key) => {
    Alert.alert("Delete To Do", "Are you sure?", [
      { text: "Cancel" },
      {
        text: "I'm Sure",
        style: "destructive",
        onPress: () => {
          const newToDos = { ...toDos };
          delete newToDos[key];
          setToDos(newToDos);
          saveToDos(newToDos);
        },
      },
    ]);
  };

  // console.log(toDos);
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
      <View>
        <TextInput
          onSubmitEditing={addToDo}
          onChangeText={onChangeText}
          returnKeyType="done"
          value={text}
          placeholder={
            working ? "What do you have to do?" : "Where do you want to go?"
          }
          style={styles.input}
        />
        <ScrollView>
          {toDos &&
            Object.keys(toDos).map((key) =>
              toDos[key].working === working ? (
                <View style={styles.toDo} key={key}>
                  <Text style={styles.toDoText}>{toDos[key].text}</Text>
                  <TouchableOpacity onPress={() => deleteToDo(key)}>
                    <Fontisto name="trash" size={18} color={theme.grey} />
                  </TouchableOpacity>
                </View>
              ) : null
            )}
        </ScrollView>
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
  input: {
    backgroundColor: "#fff",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  toDo: {
    backgroundColor: theme.toDoBg,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});
```
