"use client";
import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import Feather from "react-native-vector-icons/Feather";

interface SearchProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

export default function Search({ searchQuery, onSearchChange }: SearchProps) {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        value={searchQuery}
        onChangeText={onSearchChange}
        placeholder={"Search Pokemon..."}
        placeholderTextColor="#000"
      />
      <Feather name="search" color="#000" size={24} style={styles.icon} />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  textInput: {
   width: 320,
    padding: 16,
    backgroundColor: "#c1c1c1b2",
    borderRadius: 12,
    fontSize: 16,
    paddingLeft: 48,
  },
  icon: {
    position: "absolute",
    left: 16,
  },
});
