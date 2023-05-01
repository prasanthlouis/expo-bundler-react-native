import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { Button } from "native-base";
let myBackground = require("../assets/landing.jpg");
class Landing extends React.Component {
  render() {
    return (
      <View>
        <ImageBackground
          source={myBackground}
          style={{ width: "100%", height: "100%" }}>
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button
              block={true}
              style={styles.buttonStyle}
              onPress={() => {
                this.props.switchScreen("search");
              }}>
              <Text style={styles.buttonText}>Start Searching!</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    marginTop: 64,
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  },
  titleStyle: {
    fontSize: 30,
    color: "blue",
  },
  buttonStyle: {
    margin: 10,
  },
  buttonText: {
    color: "white",
  },
};

export default Landing;
