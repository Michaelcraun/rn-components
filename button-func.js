import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

const Button = ({ title, style, outlined }) => {
  return (
    <TouchableOpacity
      style={[outlined ? styles.outlined : styles.filled, style, styles.core]}
    >
      <Text style={{ color: outlined ? "blue" : "white" }}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  core: {
    justifyContent: "center",
    padding: 10,
  },
  filled: {
    backgroundColor: "grey",
  },
  outlined: {
    borderWidth: 1,
    borderColor: "#ccc",
  },
});

export default Button;
