import { StatusBar } from 'expo-status-bar';
import { Text, View, Platform } from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';


export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
      <Text>Open up App.js tosds start working on Hello's app!</Text>
      <Button><Text>Hello World</Text></Button>
      <StatusBar style="auto" />
    </View>
    </NativeBaseProvider>
  );
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  }
}