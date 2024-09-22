import { View, Text, TextInput, Button, Alert } from 'react-native';
import React, { useEffect, useState } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AsyncStorageExample = () => {

  const [username, setUsername] = useState('');
  const [storedUsername, setStoredUsername] = useState('');

  const saveUsername = async () => {
    await AsyncStorage.setItem('Name', username);
    setUsername('');
    Alert.alert('Username Saved');
  };

  const getUsername = async () => {
    const savedUserName = await AsyncStorage.getItem('Name');
    if(savedUserName) {
      setStoredUsername(savedUserName);
    } else {
      Alert.alert('Username not found');
    };
  };

  const removeUsername = async () => {
    await AsyncStorage.removeItem('Name');
    setStoredUsername('');
    Alert.alert('Username removed');
  };

  useEffect(() => {
    getUsername();
  }, []);

  return (
    <View>
      <TextInput 
      placeholder='Enter Username'
      value={username}
      onChangeText={setUsername}
      />
      <Button title='Save Username' onPress={saveUsername} />
      <Button title='Get Username' onPress={getUsername} />
      <Button title='Remove Username' onPress={removeUsername} />
      <Text>Stored Username:  {storedUsername} </Text>
    </View>
  )
}

export default AsyncStorageExample;