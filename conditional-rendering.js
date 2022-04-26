import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default class ConditionalRendering extends React.Component {
  state = {};

  render() {
    return (
      <View style={{ margin: 10, alignItems: "center" }}>
        <Text>What is 1 + 1</Text>
        <TouchableOpacity
          style={{ borderColor: "blue", borderWidth: 1, margin: 10 }}
          onPress={() => this.setState({ show_result: true })}
        >
          <Text style={{ color: "blue", padding: 5 }}>Show the Answer</Text>
        </TouchableOpacity>
        {this.state.show_result ? <Text>It is equal 2</Text> : null}
      </View>
    );
  }
}
