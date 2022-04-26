import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ title }) => {
    return <TouchableOpacity style={{borderWidth: 1, borderColor: '#ccc', justifyContent: 'center', padding: 10, backgroundColor: 'grey'}}>
        <Text>{ title }</Text>
    </TouchableOpacity>
}

export default Button;