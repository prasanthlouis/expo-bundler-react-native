import { StatusBar } from 'expo-status-bar';
import { Text, View, Platform, Image, ImageBackground } from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';
import Landing from './src/Landing';

export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
<Landing/>
    </View>
    </NativeBaseProvider>
  );
}

const styles = {

}