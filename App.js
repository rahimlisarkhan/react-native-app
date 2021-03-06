import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TextInput, ScrollView, FlatList } from "react-native";
import TodoItem from "./components/todoItem";

const App = () => {
  const [todoText, setTodoText] = useState("");
  const [todoList, setTodoList] = useState([]);

  const handleText = (eventText) => {
    setTodoText(eventText);
  };

  const handleList = () => {
    setTodoList(todoList => [
      ...todoList,
      {id:Math.random().toString(), value:todoText}
      ]);

    setTodoText('')
  };

  const handleListDel = (todo) => {
    const newList = todoList.filter((item) => item !== todo);
    setTodoList(newList);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}> TODO</Text>

      <View style={styles.formLogin}>
        <View style={styles.formGroup}>
          <TextInput
            style={styles.joinInput}
            placeholder="todos"
            value={todoText}
            onChangeText={handleText}
          />
          <Button style={styles.joinButton} onPress={handleList} title="ADD" />
        </View>
        <FlatList
            keyExtractor={(item,index)=>item.id}
            data={todoList}
            renderItem={itemData => (
              <TodoItem title={itemData.item.value}/>
            )}
        />
      </View>
    </View>
  );
};

// Style
const styles = StyleSheet.create({
  container: {
    flex: 2,
    paddingTop: 50,
    backgroundColor: "#161d25",
    alignItems: "center",
    color: "white",
    justifyContent: "flex-start",
  },

  title: {
    fontSize: 56,
    color: "white",
    fontWeight: "bold",
    marginBottom: 20,
  },

  formLogin: {
    width: "90%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  formGroup: {
    width: "92%",
    flexDirection: "row",
    backgroundColor: "white",
    display: "flex",
    marginBottom: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },
  todoCard: {
    width: "92%",
    height: 40,
    marginBottom: 15,
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    backgroundColor: "white",
  },

  todoText: {
    fontSize: 25,
    display: "flex",
    padding: 5,
    justifyContent: "center",
    alignItems: "center",
    textAlign: "center",
  },

  joinInput: {
    width: "80%",
    height: 40,
    marginBottom: 4,
  },

  joinButton: {
    height: 50,

    backgroundColor: "#baff29",
  },
});

export default App;
