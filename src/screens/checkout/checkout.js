import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Colors} from '../../globals';

const Checkout = (props) => {
  console.log(props);
  const {items, crust, selected, value} = props.route.params;
  return (
    <View style={{flex: 1, marginTop: 20, marginHorizontal: 20}}>
      <Text style={style.mainText}> Checkout Page</Text>
      <Text style={style.secondary}>Total Price: {value}</Text>
      <Text style={style.body}> Selected items: </Text>
      <Text style={style.body}>Size: {selected.title}</Text>
      <Text style={style.body}>Crust: {crust.title}</Text>
      <Text style={style.secondary}>Selected Items</Text>
      {items.map((element) => {
        return (
          element.selected && (
            <View>
              <Text style={style.body}>{element.title}</Text>
            </View>
          )
        );
      })}
    </View>
  );
};
const style = StyleSheet.create({
  mainText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 10,
  },
  secondary: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.darkBlue,
    marginVertical: 35,
  },
  body: {
    fontSize: 16,
    fontWeight: 'bold',
    marginVertical: 10,
  },
});
export default Checkout;
