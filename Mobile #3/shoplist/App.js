import { FlatList, StyleSheet, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';

import useItemStore from './store/shoplist.store';

import Counter from './components/counter';
import ItemInput from './components/item-input';

export default function App() {
  const { items } = useItemStore();

  return (
    <PaperProvider>
    <View style={styles.container}>
      <ItemInput />
      <FlatList
        data={items}
        renderItem={({item}) => <Counter item={item} />}
        keyExtractor={item => item.id}
      />
    </View>
    </PaperProvider>
    );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 50,
  },
});
