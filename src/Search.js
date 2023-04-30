import React from "react";
import { View, Text } from "react-native";
import { HStack, Icon, Input, StatusBar, Box, Item } from "native-base";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import PokeLoader from "./PokeLoader";
import SearchBody from "./SearchBody";
class Search extends React.Component {
  state = {
    pokeSearch: "",
    onCall: false,
  };
  searchPoke = () => {};
  renderBody = () => {
    if (this.state.onCall) {
      return <PokeLoader />;
    } else {
      return <SearchBody />;
    }
  };
  render() {
    return (
      <>
        <StatusBar bg="#3700B3" barStyle="light-content" />
        <Box safeAreaTop />
        <HStack
          px="1"
          py="3"
          justifyContent="space-between"
          alignItems="center"
          w="100%">
          <HStack alignItems="center">
            <Input
              value={this.state.pokeSearch}
              placeholder="Search Pokemon"
              onChangeText={(pokeSearch) => this.setState({ pokeSearch })}
              variant="filled"
              width="100%"
              borderRadius="10"
              py="1"
              px="2"
              InputLeftElement={
                <Icon
                  ml="2"
                  size="4"
                  color="gray.400"
                  as={<Ionicons name="ios-search" />}
                />
              }
            />
          </HStack>
        </HStack>
        {this.renderBody()}
      </>
    );
  }
}

export default Search;
