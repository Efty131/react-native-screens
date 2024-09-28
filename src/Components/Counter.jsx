import { View, Text, Button } from 'react-native';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, reset, decrement } from './redux/slice/counterSlice';

const Counter = () => {
    // store theke state get korar jonno useSelector hook use hoy
    const count = useSelector((state) => state.counter.value);
    // Action dispatch korar jonno useDispatch hook use hoy | dispatch mane send kora
    const dispatch = useDispatch();
  return (
    <View>
      <Text style={{fontSize: 30}}>Counter: {count}</Text>
      <Button title='Increment' onPress={() => dispatch(increment())} />
      <Button title='Decrement' onPress={() => dispatch(decrement())} />
      <Button title='Reset' onPress={() => dispatch(reset())} />
    </View>
  )
};

export default Counter;