import React from "react";
import { Text, TextInput, View } from "react-native";

import styles from "../styles/search";

export default function Search({ search, setSearch }) {
  return (
    <View style={styles.container}>
      <Text style={styles.icon}>⌕</Text>

      <TextInput
        style={styles.input}
        placeholder="Search leads..."
        placeholderTextColor="#9CA3AF"
        value={search}
        onChangeText={setSearch}
      />
    </View>
  );
}
