import React from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {ButtonComponent} from '../../components/mainButton/button';
import {Header} from '../../components/header/header';
import {OptionList} from '../../components/optionList/optionList';

const HomeScreen = (props) => {
  const {container} = styles;
  const action = () => {
    console.log('abc');
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header />
      <OptionList />
      <ButtonComponent onPress={action} label="Continue" />
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 10,
    backgroundColor: 'red',
    height: 60,
    justifyContent: 'center',
  },
});
export default HomeScreen;
