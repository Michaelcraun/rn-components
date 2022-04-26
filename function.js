import React from 'react';
import { View } from 'react-native';

// Spacing on closure is stupidly important!!
// Named export `export const Avatar` must be imported via 
// `import { Avatar } from './function';` but allows you to export multiple
// objects from the same file.
const Avatar = () => {
    return <View style={{height: 50, width: 50, borderRadius: 25, backgroundColor: 'green'}}></View>
};

export default Avatar;