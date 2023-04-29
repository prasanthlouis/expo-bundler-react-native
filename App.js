import { StatusBar } from 'expo-status-bar';
import { Text, View, Platform } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js tosds start working on Hello's app!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  }
}