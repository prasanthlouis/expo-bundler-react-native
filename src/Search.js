import React from "react";
import { View, Text } from "react-native";
import {
  HStack,
  Item,
  Icon,
  Input,
  IconButton,
  MaterialIcons,
} from "native-base";
class Search extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <HStack bg="violet.800" alignItems="center">
          <HStack alignItems="center">
            <Text>Pokemon Search</Text>
          </HStack>
        </HStack>
      </View>
    );
  }
}

export default Search;
