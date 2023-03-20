import { useState } from 'react';
import { StyleSheet, useWindowDimensions, View } from 'react-native';
import { Provider as PaperProvider } from 'react-native-paper';
import { Button, Text, TextInput } from 'react-native-paper';

export default function App() {
  const [numberOne, setNumberOne] = useState('');
  const [numberTwo, setNumberTwo] = useState('');
  const [result, setResult] = useState('');

  const windowWidth = useWindowDimensions().width;

  function addNumbers() {
    if (numberOne && numberTwo) {
      let sum = parseFloat(numberOne) + parseFloat(numberTwo);

      setResult(sum.toString());
      setNumberOne('');
      setNumberTwo('');
    }
  }

  return (
    <PaperProvider>
      <View style={styles.container}>
        <Text variant='displayMedium' style={styles.headline}>Calculate</Text>
        <TextInput
          mode='outlined'
          label='Value 1'
          placeholder='Your first value'
          value={numberOne}
          onChangeText={(text) => {
            if (!isNaN(text)) setNumberOne(text);
          }}
          style={{...styles.input, width: windowWidth - 20}}
        />
        <TextInput
          mode='outlined'
          label='Value 2'
          placeholder='Your second value'
          value={numberTwo}
          onChangeText={(text) => {
            if (!isNaN(text)) setNumberTwo(text);
          }}
          style={{...styles.input, width: windowWidth - 20}}
        />
        <Button
          mode='contained'
          onPress={addNumbers }
          style={styles.button}
        >
          Add
        </Button>
        {result &&
          <Text variant='displaySmall'>Result: {result}</Text>  
        }
      </View>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  headline: {
    marginTop: 100,
    marginBottom: 30,
  },
  input: {
    marginBottom: 5,
  },
  button: {
    marginBottom: 10,
  }
});
