import React, { useState } from 'react';

import { StyleSheet, View } from 'react-native';
import { Button, TextInput } from 'react-native-paper';

import useItemStore from '../store/shoplist.store';

export default function ItemInput() {
  const { addItem } = useItemStore();
  const [ item, setItem ] = useState('');

  function addItemToList() {
    if (item.trim() !== '') {
      addItem(item);
      setItem('');
    }
  }

  return(
    <View style={styles.container}>
      <TextInput
        label="Adicionar Item"
        mode='outlined'
        value={item}
        onChangeText={item => setItem(item)}
        style={styles.input}
      />
      <Button mode='contained' onPress={addItemToList}>Adicionar</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  input: {
    width: 250,
  }
});
