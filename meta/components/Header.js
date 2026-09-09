import React from "react";
import { Text, View } from "react-native";

import styles from "../styles/HeaderStyles";

export default function Header({ count }) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>Leads</Text>

        <Text style={styles.subtitle}>Manage your incoming leads</Text>
      </View>

      <View style={styles.countContainer}>
        <Text style={styles.count}>{count}</Text>

        <Text style={styles.countLabel}>LEADS</Text>
      </View>
    </View>
  );
}
