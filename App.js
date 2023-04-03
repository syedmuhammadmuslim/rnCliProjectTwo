/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {Text, View, StyleSheet, Button, Alert} from 'react-native';

const App = () => {
  const buttonPressed = msg => {
    alert('Hi from ' + msg);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Hello</Text>
      <View style={{flexDirection: 'row'}}>
        <View style={{padding: 10}}>
          <Button
            title="Click Me!"
            onPress={buttonPressed.bind(this, 'Button 1')}
          />
        </View>
        <View style={{padding: 10}}>
          <Button
            title="Click Me!"
            onPress={buttonPressed.bind(this, 'Button 2')}
          />
        </View>
      </View>
    </View>
  );
};

//Adding comment

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    fontSize: 30,
    color: 'ffffff',
  },
  text: {
    fontSize: 30,
    color: '#654321',
  },
});

export default App;
