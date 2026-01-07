"use client";
import TabButton from "@/components/TabButton";
import { STAT_COLORS, TABS, TabType } from "@/constants/pokemon";
import { COLORS } from "@/constants/theme";
import { PokemonDetail, PokemonEffects } from "@/types/pokemon";
import { Stack, useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const colorByType = COLORS as Record<string, string>

export default function Details() {
  const params = useLocalSearchParams();
  const [pokemonsDetail, setPokemonsDetail] = useState<PokemonDetail | null>(
    null
  );
  const [selectedTab, setSelectedTab] = useState<TabType>(TABS[0]);
  const [effects, setEffects] = useState<PokemonEffects | null>(null);


  useEffect(() => {
    fetchPokemonDetails(params.name as string);
  }, [params.name]);
  useEffect(() => {
    if (pokemonsDetail && pokemonsDetail.abilities.length > 0) {
      const abilityName = pokemonsDetail.abilities[0].ability.name;
      fetchPokemonsEffect(abilityName);
    }
  }, [pokemonsDetail]);

  async function fetchPokemonsEffect(abilityName: string) {
    const response = await fetch(
      `https://pokeapi.co/api/v2/ability/${abilityName}`
    );
    const data = await response.json();
    setEffects({ effect_entries: data.effect_entries });
  }

  async function fetchPokemonDetails(name: string) {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();

      setPokemonsDetail({
        name: data.name,
        image: data.sprites.front_default,
        forms: data.forms.map((form: any) => form.name),
        height: data.height,
        weight: data.weight,
        type: data.types,
        imageBack: data.sprites.back_default,
        stat: data.stats,
        abilities: data.abilities,
      });
    } catch (error) {
      console.error("Error fetching Pokémon details:", error);
    }
  }

  return (
    <>
      <Stack.Screen options={{ title: params.name as string }} />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          padding: 16,
          paddingBottom: 30,
        }}
      >
        {pokemonsDetail ? (
          <>
            <View>
              <Text style={[styles.name, { color: colorByType[pokemonsDetail.type[0].type.name] }]}>
                {pokemonsDetail.name}
              </Text>
            </View>
            <View
              style={[
                styles.pokemonCard,
                {
                  backgroundColor: colorByType[pokemonsDetail.type[0].type.name] + "50",
                  shadowColor: colorByType[pokemonsDetail.type[0].type.name],
                }
              ]}
            >
              <Image
                source={{ uri: pokemonsDetail.image }}
                style={styles.pokemonImage}
              />
            </View>

            <View style={styles.cardMenu}>
              {TABS.map((tab) => (
                <TabButton
                  key={tab}
                  title={tab}
                  isActive={selectedTab === tab}
                  onPress={() => setSelectedTab(tab)}
                  activeColor={colorByType[pokemonsDetail.type[0].type.name]}
                />
              ))}
            </View>

            {selectedTab === "Forms" && (
              <View style={styles.contentContainer}>
                <View style={styles.formsImageContainer}>
                  <View
                    style={[
                      styles.formImageWrapper,
                      {
                        backgroundColor: colorByType[pokemonsDetail.type[0].type.name] + "30",
                        borderColor: colorByType[pokemonsDetail.type[0].type.name],
                        shadowColor: colorByType[pokemonsDetail.type[0].type.name],
                      }
                    ]}
                  >
                    <Image
                      source={{ uri: pokemonsDetail.image }}
                      style={styles.formImage}
                    />
                    <Text style={styles.formLabel}>Front</Text>
                  </View>
                  <View
                    style={[
                      styles.formImageWrapper,
                      {
                        backgroundColor: colorByType[pokemonsDetail.type[0].type.name] + "30",
                        borderColor: colorByType[pokemonsDetail.type[0].type.name],
                        shadowColor: colorByType[pokemonsDetail.type[0].type.name],
                      }
                    ]}
                  >
                    <Image
                      source={{ uri: pokemonsDetail.imageBack }}
                      style={styles.formImage}
                    />
                    <Text style={styles.formLabel}>Back</Text>
                  </View>
                </View>

                {effects && effects.effect_entries.length > 0 && (
                  <View
                    style={[
                      styles.effectCard,
                      { borderLeftColor: colorByType[pokemonsDetail.type[0].type.name] }
                    ]}
                  >
                    <Text style={styles.effectTitle}>Ability Effect</Text>
                    <Text style={styles.effectText}>
                      {effects.effect_entries.find(
                        (e) => e.language.name === "en"
                      )?.effect || effects.effect_entries[0].effect}
                    </Text>
                  </View>
                )}
              </View>
            )}

            {selectedTab === "Types" && (
              <View style={styles.contentContainer}>
                <View style={styles.typesContainer}>
                  {pokemonsDetail.type.map((t) => (
                    <View
                      key={t.type.name}
                      style={[
                        styles.typeBadge,
                        {
                          backgroundColor: colorByType[t.type.name],
                          shadowColor: colorByType[t.type.name],
                        }
                      ]}
                    >
                      <Text style={styles.typeBadgeText}>
                        {t.type.name.toUpperCase()}
                      </Text>
                    </View>
                  ))}
                </View>
              </View>
            )}

            {selectedTab === "Details" && (
              <View style={styles.contentContainer}>
                <View style={styles.detailCard}>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>📏 Height</Text>
                    <Text
                      style={[
                        styles.detailValue,
                        { color: colorByType[pokemonsDetail.type[0].type.name] }
                      ]}
                    >
                      {pokemonsDetail.height / 10} m
                    </Text>
                  </View>
                </View>
                <View style={styles.detailCard}>
                  <View style={styles.detailRow}>
                    <Text style={styles.detailLabel}>⚖️ Weight</Text>
                    <Text
                      style={[
                        styles.detailValue,
                        { color: colorByType[pokemonsDetail.type[0].type.name] }
                      ]}
                    >
                      {pokemonsDetail.weight / 10} kg
                    </Text>
                  </View>
                </View>
              </View>
            )}

            {selectedTab === "Stats" && (
              <View style={styles.contentContainer}>
                {pokemonsDetail.stat.map((s: any) => {
                  const statColor = STAT_COLORS[s.stat.name] || colorByType[pokemonsDetail.type[0].type.name];
                  const statPercentage = (s.base_stat / 255) * 100;

                  return (
                    <View key={s.stat.name} style={styles.statRow}>
                      <Text style={styles.statName}>
                        {s.stat.name.replace("-", " ").toUpperCase()}
                      </Text>
                      <View style={styles.progressBarBackground}>
                        <View
                          style={[
                            styles.progressBarFill,
                            {
                              width: `${statPercentage}%`,
                              backgroundColor: statColor,
                            }
                          ]}
                        />
                      </View>
                      <Text style={[styles.statValue, { color: statColor }]}>
                        {s.base_stat}
                      </Text>
                    </View>
                  );
                })}
              </View>
            )}
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
    fontSize: 36,
    fontWeight: "900",
    textAlign: "center",
    textTransform: "capitalize",
    letterSpacing: 2,
    marginBottom: 10,
  },
  pokemonCard: {
    padding: 30,
    borderRadius: 30,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.5,
    shadowRadius: 20,
    elevation: 10,
    marginBottom: 20,
  },
  pokemonImage: {
    width: 250,
    height: 250,
    alignSelf: "center",
  },
  cardMenu: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginVertical: 10,
    gap: 8,
  },
  contentContainer: {
    gap: 15,
    marginTop: 10,
  },
  formsImageContainer: {
    flexDirection: "row",
    justifyContent: "space-around",
    gap: 15,
    marginBottom: 20,
  },
  formImageWrapper: {
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 3,
    padding: 10,
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  formImage: {
    width: 120,
    height: 120,
  },
  formLabel: {
    marginTop: 5,
    fontSize: 14,
    fontWeight: "bold",
    color: "#555",
  },
  effectCard: {
    backgroundColor: "#f5f5f5",
    padding: 15,
    borderRadius: 15,
    borderLeftWidth: 4,
  },
  effectTitle: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
    marginBottom: 8,
  },
  effectText: {
    fontSize: 14,
    lineHeight: 20,
    color: "#555",
  },
  typesContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 10,
    flexWrap: "wrap",
  },
  typeBadge: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    minWidth: 100,
    alignItems: "center",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    elevation: 5,
  },
  typeBadgeText: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
  },
  detailCard: {
    backgroundColor: "white",
    padding: 20,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  detailLabel: {
    fontSize: 18,
    color: "#555",
    fontWeight: "600",
  },
  detailValue: {
    fontSize: 24,
    fontWeight: "bold",
  },
  statRow: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
    marginBottom: 15,
  },
  statName: {
    flex: 1,
    fontSize: 14,
    fontWeight: "600",
    color: "#555",
  },
  progressBarBackground: {
    flex: 2,
    height: 10,
    backgroundColor: "#e0e0e0",
    borderRadius: 10,
    overflow: "hidden",
  },
  progressBarFill: {
    height: "100%",
    borderRadius: 10,
  },
  statValue: {
    fontSize: 16,
    fontWeight: "bold",
    minWidth: 40,
    textAlign: "right",
  },
});
