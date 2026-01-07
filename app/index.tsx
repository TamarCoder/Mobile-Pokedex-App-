"use client";
import Search from "@/components/Search";
import { Link } from "expo-router";
import React, { useEffect, useState } from "react";
import {
  Animated,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface Pokemon {
  name: string;
  image: string;
  imageBack: string;
  type: PokemonType[];
}

interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

const colorByType: Record<string, string> = {
  grass: "#78C850",
  fire: "#F08030",
  water: "#6890F0",
  bug: "#A8B820",
  normal: "#A8A878",
  poison: "#A040A0",
  electric: "#F8D030",
  ground: "#E0C068",
  fairy: "#EE99AC",
  fighting: "#C03028",
  psychic: "#F85888",
  rock: "#B8A038",
  ghost: "#705898",
  ice: "#98D8D8",
  dragon: "#7038F8",
  dark: "#705848",
  steel: "#B8B8D0",
};

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
      <Search searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {filteredPokemons.map((pokemon, index) => (
        <PokemonCard
          key={pokemon.name}
          pokemon={pokemon}
          index={index}
        />
      ))}
    </ScrollView>
  );
}

const PokemonCard = ({ pokemon, index }: { pokemon: Pokemon; index: number }) => {
  const fadeAnim = new Animated.Value(0);
  const scaleAnim = new Animated.Value(0.8);

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 600,
        delay: index * 100,
        useNativeDriver: true,
      }),
      Animated.spring(scaleAnim, {
        toValue: 1,
        delay: index * 100,
        tension: 50,
        friction: 7,
        useNativeDriver: true,
      }),
    ]).start();
  }, []);

  return (
    <Animated.View
      style={{
        opacity: fadeAnim,
        transform: [{ scale: scaleAnim }],
      }}
    >
      <Link
        href={{ pathname: `/details`, params: { name: pokemon.name } }}
        style={[
          styles.card,
          {
            backgroundColor: colorByType[pokemon.type[0].type.name] + "50",
          }
        ]}
      >
        <View>
          <Text style={styles.name}>{pokemon.name}</Text>
          <Text style={[styles.type, { color: colorByType[pokemon.type[0].type.name] }]}>
            {pokemon.type[0].type.name}
          </Text>
          <View style={styles.imageContainer}>
            <Image
              source={{ uri: pokemon.image }}
              style={styles.pokemonImage}
            />
            <Image
              source={{ uri: pokemon.imageBack }}
              style={styles.pokemonImage}
            />
          </View>
        </View>
      </Link>
    </Animated.View>
  );
    </ScrollView>
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
  },
  name: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "capitalize",
  },
  type: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    textTransform: "uppercase",
  },
  imageContainer: {
    flexDirection: "row-reverse",
    justifyContent: "center",
    gap: 10,
  },
  pokemonImage: {
    width: 150,
    height: 150,
  },
});
