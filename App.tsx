/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Image } from 'react-native';
import CardItem from './components/CardItem';

function App(): JSX.Element {
  return (
    <View style={styles.container}>
      <CardItem name="Model X"
        tagline="Starting form $99,500"
        taglineCTA="Touchless Delivery"
        image={require('./assets/images/ModelX.jpeg')}
      />
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

export default App;
