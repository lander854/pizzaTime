import React, {useState, useEffect} from 'react';
import {SafeAreaView} from 'react-native';
import {Header} from '../../components/header/header';
import {OptionList} from '../../components/optionList/optionList';
import {ButtonComponent} from '../../components/mainButton/button';
const Toppings = (props) => {
  const [selected, setSelected] = useState(props.route.params.selected);
  const [crust, setCrust] = useState(props.route.params.crust);
  const [value, setValue] = useState(0);
  const [items, setItems] = useState([
    {
      id: '10',
      title: 'Pepperoni',
      image: require('./../../assets/img/pizza2.jpg'),

      price: 0,
    },
    {
      id: '20',
      title: 'Mushrooms',
      image: require('./../../assets/img/pizza2.jpg'),

      price: 0,
    },
    {
      id: '30',
      title: 'Onions',
      image: require('./../../assets/img/pizza2.jpg'),

      price: 0,
    },
    {
      id: '40',
      title: 'Sausage',
      image: require('./../../assets/img/pizza2.jpg'),

      price: 0,
    },
    {
      id: '50',
      title: 'Bacon',
      image: require('./../../assets/img/pizza2.jpg'),

      price: 0,
    },
    {
      id: '60',
      title: 'Extra cheese',
      image: require('./../../assets/img/pizza2.jpg'),

      price: 0,
    },
    {
      id: '7',
      title: 'Black Olives',
      image: require('./../../assets/img/pizza2.jpg'),

      price: 0,
    },
    {
      id: '80',
      title: 'Green Peppers',
      image: require('./../../assets/img/pizza2.jpg'),

      price: 0,
    },
    {
      id: '90',
      title: 'Pineapple',
      image: require('./../../assets/img/pizza2.jpg'),

      price: 0,
    },
    {
      id: '100',
      title: 'Spinach',
      image: require('./../../assets/img/pizza2.jpg'),

      price: 0,
    },
  ]);
  useEffect(() => {
    setValue(selected.price + crust.price);
  }, []);
  useEffect(() => {
    crust && setValue(selected.price + crust.price);
  }, [crust]);

  const setToppings = (item) => {
    let tempItems = [...items];
    console.log(item);
    let count = 0;
    // enable/disable item
    tempItems.forEach((element) => {
      if (element.id === item.id) {
        element.selected = !element.selected;
      }
    });
    // check number of selected items
    tempItems.forEach((element) => {
      if (element.selected) {
        count++;
      }
    });
    // set price
    if (count < 4) {
      tempItems.forEach((element) => {
        if (count > 2 && !element.selected) {
          element.price = 0.5;
        } else {
          element.price = 0;
        }
      });
    }
    if (props.route.params.selected.id === '1' && count > 5) {
      return;
    } else if (props.route.params.selected.id === '2' && count > 7) {
      return;
    } else if (props.route.params.selected.id === '3' && count > 9) {
      return;
    }
    setItems([...tempItems]);
    setValue(
      selected.price + crust.price + (count > 3 ? (count - 3) * 0.5 : 0),
    );
  };

  const action = () => {
    props.navigation.push('Checkout', {selected, crust, items, value});
  };
  return (
    <SafeAreaView style={{flex: 1}}>
      <Header value={value} />

      <OptionList items={items} selected={crust} setSelected={setToppings} />
      <ButtonComponent
        onPress={action}
        label="Checkout"
        disabled={selected === null}
      />
    </SafeAreaView>
  );
};
export default Toppings;
