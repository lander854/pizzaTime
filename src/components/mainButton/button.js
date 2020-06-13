import React from 'react';
import {
  TouchableNativeFeedback,
  Text,
  StyleSheet,
  View,
  Dimensions,
} from 'react-native';
import {Colors} from '../../globals';
import {Button} from 'react-native-elements';

export const ButtonComponent = (props) => {
  const {container, button, text} = styles;
  return (
    <View style={container}>
      <Button
        buttonStyle={button}
        onPress={props.onPress}
        title={props.label}
        titleStyle={text}
        disabled={props.disabled}
        loading={props.loading}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 4,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.PrimaryColor,
    height: 60,
    alignSelf: 'center',
    borderRadius: 8,
    width: Dimensions.get('window').width * 0.8,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.white,
  },
});
