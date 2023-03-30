import React from 'react';

import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialIcons';

import useItemStore from '../store/shoplist.store';

export default function Counter(props) {
  const { increment, decrement, reset, removeItem } = useItemStore();
  const item = props.item;

  return (
    <View style={styles.container}>
      <View style={styles.itemContainer}>
        <Text variant='displaySmall' style={{color: '#999'}}>{item.name}: {item.count}</Text>
        <View style={styles.buttonContainer}>
          <Button mode='contained' onPress={() => increment(item.id)}>
            <Icon name="add" size={24} color="#fff" />
          </Button>
          <Button mode='contained' onPress={() => reset(item.id)}>
            Limpar
          </Button>
          <Button mode='contained' onPress={() => decrement(item.id)}>
            <Icon name="remove" size={24} color="#fff" />
          </Button>
        </View>
      </View>
      <Button mode='contained' onPress={() => removeItem(item.id)}>
        <Icon name="close" size={24} color="#fff" />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginTop: 15,
    marginBottom: 15,
  },
  itemContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderWidth: 2,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
    backgroundColor: '#eee',
    borderColor: '#ddd',
    paddingTop: 10,
    paddingBottom: 15,
    paddingLeft: 15,
    paddingRight: 15,
  },
  buttonContainer: {
    marginTop: 10,
    flexDirection: 'row',
    gap: 5,
  },
});
