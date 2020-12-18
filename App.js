import React from 'react';
import {
  StyleSheet,
  View,
  Text,
} from 'react-native';

export default function App(){
  return (
    <>
      <View style={styles.container}>
        <Text style={styles.title}>
          Hello, DIO!
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    flex:1,
    justifyContent: 'center',
  }, 
  title: {
    color: "#000",
    fontSize: 24,
    margin: 10,
    textAlign: 'center',
  },

});


