import React, {useState, useEffect} from 'react';
import {SafeAreaView, Text, View, StyleSheet} from 'react-native';
import {ButtonComponent} from '../../components/mainButton/button';
import {Header} from '../../components/header/header';
import {OptionList} from '../../components/optionList/optionList';

const HomeScreen = (props) => {
  const {container} = styles;
  const [selected, setSelected] = useState(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    console.log(selected);
    selected && setValue(selected.price);
  }, [selected]);

  const action = () => {
    props.navigation.push('Crust', {selected});
  };
  const items = [
    {
      id: '1',
      title: 'Small Pizza',
      price: 8,
      ingredients: 3,
    },
    {
      id: '2',
      title: 'Medium Pizza',
      price: 10,
      ingredients: 3,
    },
    {
      id: '3',
      title: 'Large Pizza',
      price: 12,
      ingredients: 3,
    },
  ];

  return (
    <SafeAreaView style={{flex: 1}}>
      <Header value={value} />
      <OptionList items={items} selected={selected} setSelected={setSelected} />
      <ButtonComponent
        onPress={action}
        label="Choose a Crust"
        disabled={selected === null}
      />
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
