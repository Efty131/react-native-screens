import { View, Text, Button } from 'react-native';
import React from 'react';
const About = (props) => {
  console.log(props.route.params);
  const {userName} = props.route.params;
  return (
    <View>
      <Text style={{fontSize: 24, color: 'red', textAlign: 'center'}}>About</Text>
      <Text style={{fontSize: 24, color: 'green', textAlign: 'center'}}>Welcome {userName}</Text>
      <Button title='Go Back' onPress={() => props.navigation.goBack()} />
    </View>
  )
}
export default About;