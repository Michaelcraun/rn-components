import React from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";

export default class EventsObject extends React.Component {
  state = { name: "Please input your name", color: "blue" };

  onChangeHandler = (text) => {
    this.setState({
      name: text === "" ? "Please input your name" : text,
    });
  };

  handleOnPress = () => this.setState({ color: "red" });

  render() {
    return (
      <View style={{ alignItems: "center" }}>
        <TextInput
          style={{
            width: 300,
            borderColor: "gray",
            borderWidth: 1,
            margin: 10,
          }}
          onChangeText={this.onChangeHandler}
        />
        <TouchableOpacity onPress={this.handleOnPress}>
          <Text>Click Me!</Text>
        </TouchableOpacity>
        <Text style={{ color: this.state.color }}>{this.state.name}</Text>
      </View>
    );
  }
}
