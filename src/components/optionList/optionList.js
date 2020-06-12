import React from 'react';
import {StyleSheet, FlatList, View, Text} from 'react-native';

export const OptionList = (props) => {
  const items = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96f-145571e29d72',
      title: 'Third Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-14s5571e29d72',
      title: 'Third Item',
    },
  ];

  const {container, itemStyle, titleStyle} = styles;

  function RenderItem({title}) {
    return (
      <View style={itemStyle}>
        <Text style={titleStyle}>{title}</Text>
      </View>
    );
  }
  return (
    <View style={container}>
      <FlatList
        data={items}
        renderItem={({item}) => <RenderItem title={item.title} />}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1},
  itemStyle: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  titleStyle: {
    fontSize: 32,
  },
});
