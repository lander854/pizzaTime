import React from 'react';
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
  const {container, itemStyle, titleStyle, selectedStyle} = styles;

  function RenderItem({id, item, title, price, img}) {
    return (
      <TouchableOpacity onPress={() => props.setSelected(item)}>
        <View
          style={[
            itemStyle,
            props.selected && props.selected.id === id ? selectedStyle : null,
            item && item.selected ? selectedStyle : null,
          ]}>
          <Text style={titleStyle}>{title}</Text>
          <Text style={subTitleStyle}>{price} USD</Text>
          {img && (
            <Image
              style={{margin: 0, width: 80, height: 80}}
              resizeMode="contain"
              source={img}
            />
          )}
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={container}>
      <FlatList
        data={props.items}
        renderItem={({item}) => (
          <RenderItem
            id={item.id}
            item={item}
            title={item.title}
            price={item.price}
            img={item.image}
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
  selectedStyle: {
    borderWidth: 1,
    borderColor: Colors.PrimaryColorMedium,
    shadowColor: Colors.PrimaryColorLight,
  },
});
