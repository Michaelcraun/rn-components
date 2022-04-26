import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

class Button extends React.Component {
    render() {
        return <TouchableOpacity style={{borderWidth: 1, borderColor: '#ccc', justifyContent: 'center', padding: 10, backgroundColor: 'grey'}}>
            <Text>{ this.props.title }</Text>
        </TouchableOpacity>
    };
}

export default Button;