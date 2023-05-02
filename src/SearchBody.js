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
          <FlatList
            data={data}
            renderItem={({ item }) => (
              <View>
                <Text
                  style={{ fontWeight: "bold", backgroundColor: "#F0EAD6" }}>
                  Size
                </Text>
                <Box px={2} py={2} rounded="md">
                  <Divider bg="AD6" thickness="6" orientation="horizontal" />
                  <Text>Weight - {item.weight} kg</Text>
                  <Text>Height - {item.height / 10} m</Text>
                  <Divider bg="AD6" thickness="6" orientation="horizontal" />
                </Box>
              </View>
            )}
          />
          <View style={styles.info}>
            <Text
              style={{
                fontWeight: "bold",
                backgroundColor: "#F0EAD6",
                paddingLeft: 8,
              }}>
              Abilities
            </Text>
            <Divider bg="AD6" thickness="6" orientation="horizontal" />
            <FlatList
              px={2}
              py={2}
              data={pokemon.abilities}
              renderItem={({ item }) => (
                <View>
                  <Box rounded="md">
                    <Text>{item.ability.name}</Text>
                  </Box>
                </View>
              )}
            />
          </View>
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
    opacity: 0.8,
  },
};

export default SearchBody;
