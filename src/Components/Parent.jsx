import { View } from 'react-native';
import React, { createContext, useState } from 'react';
import FirstChild from './FirstChild';
// Context API er concept 👇. Parent the child then child theke subChild component
// a data props er maddhome send na kore direct parent theke subChild a data send
// korar jonno context use hoy
// Create, Provide, Use

export const CounterContext = createContext();

const Parent = () => {
    const [count, setCont] = useState(0);
    const incrementCount = () => {
        setCont(count + 1);
    };
  return (
    <CounterContext.Provider value={{count, incrementCount}}>
        <View style={{height: '100%', justifyContent: 'center', alignItems: 'center',}}>
      <FirstChild />
    </View>
    </CounterContext.Provider>
  )
};

export default Parent;