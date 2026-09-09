import React from "react";
import { Text, View } from "react-native";

import styles from "../styles/States";

export default function State() {
  return (
    <View style={styles.container}>
      <View style={styles.iconContainer}>
        <Text style={styles.icon}>⌕</Text>
      </View>

      <Text style={styles.title}>No leads found</Text>

      <Text style={styles.subtitle}>
        Try searching with a different name or email.
      </Text>
    </View>
  );
}
