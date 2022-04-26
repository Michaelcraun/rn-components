import React from "react";
import { View, Text } from "react-native";

// Spacing on closure is stupidly important!!
// Named export `export const Avatar` must be imported via
// `import { Avatar } from './function';` but allows you to export multiple
// objects from the same file.
const Avatar = () => {
  let price = "$50";
  return (
    <View
      style={{
        height: 50,
        width: 50,
        borderRadius: 25,
        backgroundColor: "green",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>{price}</Text>
    </View>
  );
};

export default Avatar;
