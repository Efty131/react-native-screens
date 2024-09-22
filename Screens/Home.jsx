import { View, Text, Button, TextInput } from 'react-native';
import React, { useState } from 'react';
const Home = ({ navigation }) => {
  const [userName, setUserName] = useState('');
  return (
    <View>
      <Text style={{fontSize: 24, color: 'blue', textAlign: 'center'}}>Home</Text>
      <Text style={{fontSize: 24, color: 'blue', textAlign: 'center'}}>Login 👇</Text>
      <TextInput 
       placeholder='Enter your name' 
       onChangeText={setUserName} />
      <Button title='Login' onPress={() => navigation.navigate('About', {userName})} />
    </View>
  )
}
export default Home;