"use client";
import PokemonCard from "@/components/PokemonCard";
import Search from "@/components/Search";
import { Pokemon } from "@/types/pokemon";
import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";

export default function Index() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState("");

  const filteredPokemons = pokemons.filter((pokemon) =>
    pokemon.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    fetchPokemons();
  }, []);

  console.log(pokemons);

  async function fetchPokemons() {
    try {
      const response = await fetch(
        "https://pokeapi.co/api/v2/pokemon/?limit=30"
      );
      const data = await response.json();

      const datailedPokemons = await Promise.all(
        data.results.map(async (pokemon: { name: string; url: string }) => {
          const res = await fetch(pokemon.url);
          const details = await res.json();
          return {
            name: pokemon.name,
            image: details.sprites.front_default,
            imageBack: details.sprites.back_default,
            type: details.types,
          };
        })
      );

      setPokemons(datailedPokemons);
    } catch (error) {
      console.error("Error fetching pokemons:", error);
    }
  }

  return (
    <FlatList
      data={filteredPokemons}
      keyExtractor={(item) => item.name}
      numColumns={2}
      columnWrapperStyle={styles.columnWrapper}
      contentContainerStyle={styles.contentContainer}
      showsVerticalScrollIndicator={false}
      ListHeaderComponent={
        <View style={styles.headerRow}>
          <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
        </View>
      }
      renderItem={({ item, index }) => (
        <PokemonCard pokemon={item} index={index} />
      )}
    />
  );
}
const styles = StyleSheet.create({
  contentContainer: {
    padding: 16,
  },
  headerRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 16,
  },
  columnWrapper: {
    justifyContent: "space-between",
    marginBottom: 16,
  },
});
