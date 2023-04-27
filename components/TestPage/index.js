import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Cat from '../Cat';
import CatPix from '../../pages/Pokedex';

export default function TestPage() {
  return (
    <ScrollView>
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app! Holy Shit!!</Text>
      <Cat/>
      <CatPix/>
      <StatusBar style="auto" />
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    paddingBottom: 100,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
