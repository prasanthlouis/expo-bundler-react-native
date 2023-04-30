import { StatusBar } from "expo-status-bar";
import { Text, View, Platform, Image, ImageBackground } from "react-native";
import { Button, NativeBaseProvider } from "native-base";
import Landing from "./src/Landing";
import Search from "./src/Search";
import React from "react";

export default class App extends React.Component {
  state = {
    currentScreen: "landing",
  };
  switchScreen = (screen) => {
    this.setState({ currentScreen: screen });
  };
  renderScreen = () => {
    if (this.state.currentScreen === "landing")
      return <Landing switchScreen={this.switchScreen} />;
    else if (this.state.currentScreen === "search") {
      return <Search />;
    }
  };
  render() {
    return (
      <NativeBaseProvider>
        <View style={styles.container}>{this.renderScreen()}</View>
      </NativeBaseProvider>
    );
  }
}

const styles = {};
