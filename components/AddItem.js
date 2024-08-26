import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";

const Additem = ({ taskItems, setTaskItems }) => {
  const [task, setTask] = useState();
  const handleTask = () => {
    setTaskItems([...taskItems, task]);
    setTask(null);
  };
  return (
    <View style={styles.addItemContainer}>
      <View style={styles.addItem}>
        <TextInput
          style={styles.input}
          onChangeText={(text) => setTask(text)}
          value={task}
          placeholder="Write a task"
          keyboardType="ascii-capable"
        />
        <TouchableOpacity style={styles.addItemBtn} onPress={handleTask}>
          <Text style={styles.add}>+</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  addItemContainer: {
    flex: 1,
    justifyContent: "flex-end",
  },
  addItem: {
    flexDirection: "row",
  },
  input: {
    width: "70%",
    backgroundColor: "#fff",
    marginLeft: 20,
    marginVertical: 20,
    borderRadius: 60,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
  addItemBtn: {
    width: "15%",
    backgroundColor: "#fff",
    margin: 20,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  add: {
    color: "#c0c0c0",
    paddingBottom: 5,
    fontSize: 40,
  },
});
export default Additem;
