import { Image, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Image style={styles.headerImage} source={require('./assets/lightsabers.png')}/>
        <View style={styles.textContainer}>
          <Text style={styles.h1}>Lightsabers Colors</Text>
          <Text>All canon lightsabers colors in Star Wars media.</Text>
        </View>
      </View>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/blue.png')} />
          <Text style={styles.pictureText}>Blue</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/red.png')} />
          <Text style={styles.pictureText}>Red</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/green.png')} />
          <Text style={styles.pictureText}>Green</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/purple.png')} />
          <Text style={styles.pictureText}>Purple</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/yellow.png')} />
          <Text style={styles.pictureText}>Yellow</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/orange.png')} />
          <Text style={styles.pictureText}>Orange</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/white.png')} />
          <Text style={styles.pictureText}>White</Text>
        </View>
        <View style={styles.pictureContainer}>
          <Image style={styles.picture} source={require('./assets/darksaber.png')} />
          <Text style={styles.pictureText}>Darksaber</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerContainer: {
    flexDirection: 'row',
    marginTop: 50,
    marginBottom: 30,
    gap: 10,
  },
  headerImage: {
    width: 150,
    height: 150,
  },
  textContainer: {
    flexDirection: 'column',
    width: 200,
    gap: 10,
  },
  h1: {
    fontSize: 28,
  },
  scroll: {
    gap: 10,
  },
  pictureContainer: {
    marginBottom: 5,
  },
  picture: {
    width: 300,
    height: 300,
  },
  pictureText: {
    fontSize: 20,
    textAlign: 'center',
  },
});
