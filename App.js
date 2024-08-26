import { StyleSheet, Text, View } from "react-native";
import Task from "./components/Task";
import Additem from "./components/AddItem";
import { useState } from "react";
export default function App() {
  const [taskItems, setTaskItems] = useState([]);
  const updateTask = (items) => {
    setTaskItems(items);
  };
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerProp}> Today 's tasks</Text>
      </View>
      <View>
        {taskItems.length === 0 ? (
          <View>
            <Text style={styles.noTask}>No task!!!</Text>
          </View>
        ) : (
          <View>
            {taskItems.map((item, index) => (
              <Task key={index} text={item} />
            ))}
          </View>
        )}
      </View>

      <Additem taskItems={taskItems} setTaskItems={updateTask} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#E8EAED",
    borderRadius: 30,
  },
  header: {
    paddingTop: 80,
    paddingHorizontal: 20,
  },
  headerProp: {
    fontSize: 24,
    fontWeight: "bold",
  },
  noTask: {
    fontSize: 24,
    fontWeight: "bold",
    margin: 20,
  },
});
