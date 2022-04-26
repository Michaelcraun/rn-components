import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

class LifeCycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "Michael" };
    console.log(1);
  }
  shouldComponentUpdate() {
    // Add conditional logic here to prevent this component from rendering
    // every time!
    console.log(2);
    return true;
  }
  render() {
    console.log(3);
    return (
      <View>
        <TouchableOpacity
          onPress={() => {
            this.setState({ liked: true });
          }}
        >
          <Text>Update Me!</Text>
        </TouchableOpacity>
      </View>
    );
  }
  componentDidUpdate(prevProps, prevState) {
    // Called when props for this component are updated
    console.log(4);
  }
  componentDidMount() {
    // Will only be called when component is first displayed
    // Perfect place for network place
    console.log(5);
  }
  componentWillUnmount() {
    // Will only be called when component is destroyed/dismissed
    // Unsubscribe to data providers (notifications/APIs/etc.)
    console.log(6);
  }
}

export default LifeCycle;
