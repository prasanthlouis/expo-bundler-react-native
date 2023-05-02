import React from "react";
import { View, Text, ScrollView, Image } from "react-native";
import { FlatList, Box, Divider } from "native-base";

class SearchBody extends React.Component {
  render() {
    const pokemon = this.props.data;
    console.log(pokemon.name);
    const data = [
      {
        weight: pokemon.weight,
        height: pokemon.height,
      },
    ];

    return (
      <View>
        <Text style={styles.header}>
          #{pokemon.id} - {pokemon.name.toUpperCase()}
        </Text>
        <View style={styles.viewStyle}>
          <Image
            source={{ uri: pokemon.sprites.front_default }}
            style={styles.img}
          />
        </View>
        <View style={styles.info}>
          {/*           <ListItem>
            <Text style={{ fontWeight: "bold" }}>Size</Text>
          </ListItem> */}
          {/*           <ListItem>
            <Text style={{ fontWeight: "bold" }}>
              Height = {pokemon.height}
            </Text>
          </ListItem> */}
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View>
                <Box px={2} py={2} rounded="md">
                  <Text style={{ fontWeight: "bold" }}>Size</Text>
                  <Divider bg="AD6" thickness="6" orientation="horizontal" />
                  <Text>Weight - {item.weight}</Text>
                  <Divider bg="AD6" thickness="2" orientation="horizontal" />
                  <Text>Height - {item.height}</Text>
                </Box>
              </View>
            )}
          />
        </View>
      </View>
    );
  }
}

const styles = {
  header: {
    fontSize: 30,
    color: "red",
    textAlign: "center",
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
  },
  img: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center",
  },
  info: {
    backgroundColor: "#F0EAD6",
    opacity: 0.8,
    padding: 10,
  },
};

export default SearchBody;
