import { View, Text } from 'react-native';
import React from 'react';
import Two from './Two';

const One = () => {
  return (
    <View style={{height: '100%', justifyContent: 'center', alignItems: 'center'}}>
      <Text style={{fontSize: 24}}>One</Text>
      <Two />
    </View>
  );
};

export default One;