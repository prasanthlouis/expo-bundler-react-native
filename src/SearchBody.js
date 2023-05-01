import React from "react";
import { View, Text, ScrollView } from "react-native";

class SearchBody extends React.Component {
  render() {
    const pokemon = this.props.data;
    console.log(pokemon.name);

    return (
      <View>
        <Text style={styles.header}>
          #{pokemon.id} - {pokemon.name.toUpperCase()}
        </Text>
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
};

export default SearchBody;
