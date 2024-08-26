import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React, { Component } from "react";

const Task = (props) => {
  return (
    <View>
      <View style={styles.itemList}>
        <View style={styles.item}>
          <View style={styles.leftItem}>
            <TouchableOpacity style={styles.check}></TouchableOpacity>
            <Text>{props.text}</Text>
          </View>
          <View style={styles.rightItem}>
            <TouchableOpacity style={styles.status}></TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  itemList: {
    padding: 20,
    marginRight: 20,
  },
  item: {
    padding: 20,
    backgroundColor: "#fff",
    marginBottom: -20,
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  check: {
    backgroundColor: "#55BCF666",
    padding: 12,
    borderRadius: 5,
    marginRight: 15,
  },
  leftItem: {
    flexDirection: "row",
  },
  rightItem: {
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
  status: {
    width: 12,
    height: 12,
    backgroundColor: "#fff",
    borderColor: "#55BCF6",
    borderWidth: 2,
    borderRadius: 5,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Task;
