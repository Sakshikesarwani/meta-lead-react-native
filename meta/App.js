import React, { useEffect, useState } from "react";

import { FlatList, StatusBar, TouchableOpacity, Text } from "react-native";

import { SafeAreaView } from "react-native-safe-area-context";

import Header from "./components/Header";
import Search from "./components/Search";
import Lead from "./components/Lead";
import State from "./components/State";

import { fetchLeads } from "./service/api";
import { connectSocket } from "./service/socket";

import { convertLead } from "./utils/lead";

import styles from "./styles/AppStyles";

export default function App() {
  const [leads, setLeads] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadLeads() {
      try {
        const data = await fetchLeads();

        const convertedLeads = data.map(convertLead);

        setLeads(convertedLeads);
      } catch (error) {
        console.log("Error fetching leads:", error);
      }
    }

    loadLeads();
  }, []);

  useEffect(() => {
    const socket = connectSocket();

    socket.on("new_lead", (lead) => {
      console.log("New lead received:", lead);

      const convertedLead = convertLead(lead);

      setLeads((currentLeads) => {
        const alreadyExists = currentLeads.some(
          (item) => item.id === convertedLead.id,
        );

        if (alreadyExists) {
          return currentLeads;
        }

        return [convertedLead, ...currentLeads];
      });
    });

    return () => {
      socket.disconnect();
    };
  }, []);

  const filteredLeads = leads.filter((lead) => {
    const query = search.toLowerCase();

    return (
      lead.name.toLowerCase().includes(query) ||
      lead.email.toLowerCase().includes(query)
    );
  });

  return (
    <SafeAreaView style={styles.safeArea}>
      <StatusBar barStyle="dark-content" backgroundColor="#F5F6FA" />

      <Header count={leads.length} />

      <Search search={search} setSearch={setSearch} />

      {filteredLeads.length === 0 ? (
        <State />
      ) : (
        <FlatList
          data={filteredLeads}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <Lead lead={item} />}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />
      )}

      <TouchableOpacity style={styles.fab}>
        <Text style={styles.fabIcon}>+</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}
