import { View, Text, Button } from 'react-native';
import React from 'react';

const MyHeader = ({navigation}) => {
  return (
    <View>
      <Text style={{fontSize: 30, textAlign: 'center', marginTop: 20}}>MyHeader</Text>
      <Button title='Go to home' onPress={() => navigation.navigate('Home')} />
    </View>
  )
}

export default MyHeader;