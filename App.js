import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Avatar from './function';
import Button from './button-func';

export default function App() {
  let price = 45;
  let discount = price > 40 ? '20%' : '10%'
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Avatar></Avatar>
      <Text>What is 1+1? {1+1}</Text>
      <Text>The discount is: { discount }</Text>
      <Text>Logical operators: && ||</Text>
      <Text>The deal is { discount === '20%' && price < 50 ? "hot!" : "nah..." }</Text>

      
      <Button title='Click Me!' style={{ marginBottom: 20 }} outlined={true}/>
      <Button title='Dont Click Me!'/>
      <Button title='Title Button!' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

// Props (or properties) have a uni-relational flow; the parent can pass props
// to it's children, but the child cannot pass props to its parent!
