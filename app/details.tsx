"use client";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { Image, ScrollView, StyleSheet, Text } from "react-native";

interface pokemonsDetail {
  name: string;
  image: string;
  imageBack: string;
  height: number;
  weight: number;
  type: PokemonType[];
}

interface PokemonType {
  type: {
    name: string;
    url: string;
  };
}

export default function Details() {
  const params = useLocalSearchParams();

  const [pokemonsDetail, setPokemonsDetail] = useState<pokemonsDetail | null>(null);

  useEffect(() => {
    fetchPokemonDetails(params.name as string);
  }, [params.name]);

  async function fetchPokemonDetails(name: string) {
    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${name}`
      );
      const data = await response.json();

      setPokemonsDetail({
        name: data.name,
        image: data.sprites.front_default,
        imageBack: data.sprites.back_default,
        height: data.height,
        weight: data.weight,
        type: data.types,
      });
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  }

  return (
    <>
      <Stack.Screen options={{ title: params.name as string }} />
      <ScrollView
        contentContainerStyle={{
          gap: 16,
          padding: 16,
        }}
      >
        {pokemonsDetail ? (
          <>
            <Text style={styles.name}>{pokemonsDetail.name}</Text>
            <Image
              source={{ uri: pokemonsDetail.image }}
              style={{ width: 150, height: 150, alignSelf: "center" }}
            />
            <Image
              source={{ uri: pokemonsDetail.imageBack }}
              style={{ width: 150, height: 150, alignSelf: "center" }}
            />
            <Text style={styles.type}>
              Type: {pokemonsDetail.type.map((t) => t.type.name).join(", ")}
            </Text>
            <Text style={styles.type}>Height: {pokemonsDetail.height}</Text>
            <Text style={styles.type}>Weight: {pokemonsDetail.weight}</Text>
          </>
        ) : (
          <Text style={styles.name}>Loading...</Text>
        )}
      </ScrollView>
    </>
  );
}

const styles = StyleSheet.create({
  name: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
  },
  type: {
    fontSize: 20,
    fontWeight: "bold",
    color: "grey",
    textAlign: "center",
  },
});

