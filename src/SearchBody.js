import React from "react";
import { View, Text, ScrollView, Image } from "react-native";

class SearchBody extends React.Component {
  render() {
    const pokemon = this.props.data;
    console.log(pokemon.name);

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
};

export default SearchBody;
