import React from "react";
import { StyleSheet, Text, View, Button, } from "react-native";

const TodoItem = (props) => {

    return(
        <View  style={styles.todoCard}>
        <Text style={styles.todoText}>{props.title}</Text>
        <Button
          style={styles.joinButton}
        //   onPress={() => handleListDel(props.title)}
          title="DEL"
        />  
      </View>
    )
}
// Style
const styles = StyleSheet.create({
 
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
  
  });


export default TodoItem