import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const Header = (props) => {
  const {container, text} = styles;
  return (
    <View style={container}>
      <Text style={text}> Your order so far: </Text>
      <Text style={text}>0 USD</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 80,
    justifyContent: 'space-between',
    paddingHorizontal: 24,
    alignItems: 'center',
    flexDirection: 'row',
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
  },
});
