import React from "react";
import { Text, View } from "react-native";
import { TouchableOpacity } from "react-native";

export default class StateObject extends React.Component {
  state = { fav_color: "blue" };

  render() {
    return (
      <View>
        <Text style={{ color: this.state.fav_color }}>
          My favorite color is {this.state.fav_color}!
        </Text>
        <TouchableOpacity
          onPress={() =>
            this.setState({
              fav_color: this.state.fav_color === "blue" ? "orange" : "blue",
            })
          }
        >
          <Text
            style={{
              color: this.state.fav_color === "blue" ? "orange" : "blue",
            }}
          >
            Change to {this.state.fav_color === "blue" ? "orange" : "blue"}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}
