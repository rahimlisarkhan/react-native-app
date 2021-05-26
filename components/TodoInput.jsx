import React from "react";
import { StyleSheet,View, Button, } from "react-native";

const TodoInput = (props) => {

    return(
        <View style={styles.formGroup}>
        <TextInput
          style={styles.joinInput}
          placeholder="todos"
          value={props.todoText}
          onChangeText={props.handleText}
        />
        <Button style={styles.joinButton} onPress={props.handleList} title="ADD" />
      </View>
    )
}
// Style
const styles = StyleSheet.create({
    formGroup: {
      width: "92%",
      flexDirection: "row",
      backgroundColor: "white",
      display: "flex",
      marginBottom: 20,
      justifyContent: "space-between",
      alignItems: "center",
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

export default TodoInput