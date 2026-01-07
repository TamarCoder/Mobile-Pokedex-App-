import { COLORS } from "@/constants/theme";
import { PokemonCardProps } from "@/types/pokemon";
import { Link } from "expo-router";
import React from "react";
import {Image, StyleSheet, Text, View,} from "react-native";

const colorByType = COLORS

export default function PokemonCard({ pokemon, index }: PokemonCardProps) {
  return (
    <View>
      <Link
        href={{ pathname: `/details`, params: { name: pokemon.name } }}
        style={[
          styles.card,
          {
            backgroundColor: colorByType[pokemon.type[0].type.name as keyof typeof colorByType] + "50",
          }
        ]}
      >
        <View>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: pokemon.image }}
              style={styles.pokemonImage}
            />
          </View>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={[styles.type, { color: colorByType[pokemon.type[0].type.name as keyof typeof colorByType] }]}>
            {pokemon.type[0].type.name}
          </Text>
        </View>
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    padding: 20,
    borderRadius: 20,
    gap: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
    width: 180,
    height: 200,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
    marginTop: 8,
  },
  type: {
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    textTransform: "uppercase",
  },
  imageContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  pokemonImage: {
    width: 120,
    height: 120,
  },
});
