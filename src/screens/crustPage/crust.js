import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from '../../components/header/header';
import {OptionList} from '../../components/optionList/optionList';
import {ButtonComponent} from '../../components/mainButton/button';

const CrustPage = (props) => {
  const [selected, setSelected] = useState(props.route.params.selected);
  const [crust, setCrust] = useState(null);
  const [value, setValue] = useState(0);

  useEffect(() => {
    setValue(selected.price);
  }, []);
  useEffect(() => {
    crust && setValue(selected.price + crust.price);
  }, [crust]);

  const items = [
    {
      id: '1',
      title: 'Thin',
      price: 2,
    },
    {
      id: '2',
      title: 'Thic',
      price: 4,
    },
  ];

  const action = () => {
    props.navigation.push('Toppings', {selected, crust});
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header value={value} />

      <OptionList items={items} selected={crust} setSelected={setCrust} />
      <ButtonComponent
        onPress={action}
        label="Choose Your Toppings"
        disabled={selected === null}
      />
    </SafeAreaView>
  );
};

export default CrustPage;
