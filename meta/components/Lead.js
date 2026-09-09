import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

import { PRIMARY, PRIMARY_DARK } from "../constant/color";

import { getInitials } from "../utils/lead";

import styles from "../styles/Card";

export default function Lead({ lead }) {
  return (
    <TouchableOpacity style={styles.card} activeOpacity={0.8}>
      <View style={styles.topRow}>
        <View
          style={[
            styles.avatar,
            {
              backgroundColor: PRIMARY,
            },
          ]}
        >
          <Text style={styles.avatarText}>{getInitials(lead.name)}</Text>
        </View>

        <View style={styles.info}>
          <Text style={styles.name}>{lead.name}</Text>

          <Text style={styles.email}>{lead.email}</Text>
        </View>

        <Text style={styles.time}>{lead.time}</Text>
      </View>

      <View style={styles.bottomRow}>
        <View
          style={[
            styles.sourceBadge,
            {
              borderColor: PRIMARY_DARK,
            },
          ]}
        >
          <Text style={styles.sourceText}>{lead.source}</Text>
        </View>

        <View style={styles.newBadge}>
          <Text style={styles.newText}>New</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}
