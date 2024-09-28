import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';
import React from 'react';

const ImageComponentExample = () => {

    const localImage = require('../Img/Pic.jpg');
    const RemoteImage = {uri: 'https://novemecoresort.com/wp-content/uploads/2018/12/3.jpg'};
    const backgroundImage = {uri: 'https://wallpapers.com/images/hd/black-texture-background-jtqs7rf0njj5rwc9.jpg'};

  return (
      <ImageBackground 
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
      >
        <View style={styles.content}>
            <Text style={styles.text}>React Native</Text>
            <Image source={localImage} 
            style={styles.image} 
            resizeMethod="cover" />
            <Image source={RemoteImage} 
            style={styles.image} 
            resizeMethod="cover" />
        </View>
      </ImageBackground>
  )
};

export default ImageComponentExample;
const styles = StyleSheet.create({
    background: {
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    content: {
        padding: 20,
        backgroundColor: 'rbga(255,255,255,0.5)',
        borderRadius: 10,
    },
    text: {
        marginBottom: 20,
        fontSize: 24,
        color: '#fff',
    },
    image: {
        height: 200,
        width: 200,
        marginTop: 10,
        borderRadius: 10,
    },
});