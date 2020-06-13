import React, {useState} from 'react';
import {
  StyleSheet,
  FlatList,
  View,
  Text,
  Image,
  subTitleStyle,
  TouchableOpacity,
} from 'react-native';
import {Colors} from '../../globals';

export const OptionList = (props) => {
  const items = [
    {
      id: '1',
      title: 'Small Pizza',
      image: require('./../../assets/img/pizza2.jpg'),
      servings: 4,
      price: '8USD',
      ingredients: 3,
    },
    {
      id: '2',
      title: 'Medium Pizza',
      image: require('./../../assets/img/pizza2.jpg'),
      servings: 6,
      price: '10USD',
      ingredients: 3,
    },
    {
      id: '3',
      title: 'Large Pizza',
      image: require('./../../assets/img/pizza3.jpg'),
      servings: 8,
      price: '12USD',
      ingredients: 3,
    },
  ];

  const [selected, setSelected] = useState(null);
  const {container, itemStyle, titleStyle} = styles;

  function RenderItem({id, title, img, servings, price}) {
    return (
      <TouchableOpacity onPress={() => setSelected(id)}>
        <View
          style={[
            itemStyle,
            selected === id
              ? {
                  borderWidth: 1,
                  borderColor: Colors.PrimaryColorMedium,
                  shadowColor: Colors.PrimaryColorLight,
                }
              : null,
          ]}>
          <Text style={titleStyle}>{title}</Text>
          <Text style={subTitleStyle}>
            {servings} Servings / {price}
          </Text>
          {/* <Image style={{flex: 1, margin: 0}} resizeMode="center" source={img} /> */}
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={container}>
      <FlatList
        data={items}
        renderItem={({item}) => (
          <RenderItem
            id={item.id}
            title={item.title}
            img={item.image}
            servings={item.servings}
            price={item.price}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  itemStyle: {
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
    flexDirection: 'row',
    borderRadius: 8,
    elevation: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
  },
  titleStyle: {
    fontSize: 30,
  },
  subTitleStyle: {
    fontSize: 26,
    color: Colors.materialGray,
    alignSelf: 'center',
  },
});
