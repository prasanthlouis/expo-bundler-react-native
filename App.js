import { StatusBar } from 'expo-status-bar';
import { Text, View, Platform, Image, ImageBackground } from 'react-native';
import { Button, NativeBaseProvider } from 'native-base';

let myBackground = require('./assets/landing.jpg');
export default function App() {
  return (
    <NativeBaseProvider>
    <View style={styles.container}>
<ImageBackground source={myBackground} style={{width: '100%', height: '100%'}}>
  <View style={styles.viewStyle}>
    <Text style={styles.titleStyle}> Welcome to PokeSearch</Text>
    <Button
    block={true}
    style={styles.buttonStyle}
    onPress={() => {}}
    >
      <Text style={styles.buttonText}>Start Searching!</Text>
    </Button>
    </View>
</ImageBackground>
    </View>
    </NativeBaseProvider>
  );
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 64 : 0,
  },
  viewStyle:{
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle:{
    fontSize: 30,
    color: 'blue',
    alignItems: 'center'
  },
  buttonStyle:{
    margin:10
  },
  buttonText:{
    color:'white'
  }

}