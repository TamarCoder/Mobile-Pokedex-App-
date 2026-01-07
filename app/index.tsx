"use client";
import PokemonCard from "@/components/PokemonCard";
import Search from "@/components/Search";
import { Pokemon } from "@/types/pokemon";
import React, { useEffect, useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { ScrollView, StyleSheet, TouchableOpacity, View } from "react-native";

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
    <ScrollView
      contentContainerStyle={{ gap: 16, padding: 16 }}
      showsVerticalScrollIndicator={false}
    >
      <View  style={{display: "flex",  flexDirection: "row", alignItems: "center",}}>
        <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />
         <TouchableOpacity style={styles.filterIcon}>
          <MaterialCommunityIcons name="filter-variant" color="#fff" size={24} />
        </TouchableOpacity>
      </View>

      <View style={styles.listContainer}>
        {filteredPokemons.map((pokemon, index) => (
          <PokemonCard key={pokemon.name} pokemon={pokemon} index={index} />
        ))}
      </View>
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  listContainer: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: 16,
    justifyContent: "center",
  },

  filterIcon:{
    width: 50,
    height: 50,
    backgroundColor: "#5f5b65ff",
    borderRadius: 12,
    padding: 13,
    marginLeft: 8,
    
  }
});
