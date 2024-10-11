import { View, Text, TextInput, TouchableOpacity, Alert } from 'react-native';
import React, { useState } from 'react';
import { registerUser } from './Services/auth';

const Register = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPasswrod, setConfirmPassword] = useState('');
    const handleRegister = async () => {
        if(password !== confirmPasswrod){
            Alert.alert('Error', 'Passwords do not match');
            return;
        }
        try {
            await registerUser(email, password);
            Alert.alert('Success', 'A Verification Email has been sent to your email address');
            setEmail('');
            setPassword('');
            setConfirmPassword('');
        } catch (error) {
            Alert.alert('error registering user', error.message);
        }
    };
  return (
    <View className="flex-1 justify-center items-center bg-gray-100 ">
      <View className="bg-white p-8 rounded-lg shadow-lg w-96">
      <Text className="text-3xl font-bold text-pink-600 text-center mb-8">Create Account</Text>
      <TextInput 
        className="border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-pink-500"
        placeholder='Enter Email'
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize='none'
      />
      <TextInput 
        className="border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-pink-500"
        placeholder='Enter Password'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
       <TextInput 
        className="border border-gray-300 p-4 w-full mb-4 rounded-lg focus:border-pink-500"
        placeholder='Confirm Password'
        value={confirmPasswrod}
        onChangeText={setConfirmPassword}
        secureTextEntry
      />
      <TouchableOpacity className="bg-pink-600 p-4 rounded-lg" onPress={handleRegister}>
        <Text className="text-white text-center font-semibold text-lg">Register</Text>
      </TouchableOpacity>
      </View>
    </View>
  )
};

export default Register;