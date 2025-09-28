// App.tsx
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';

export default function App() {
  const tabs = ["Collections", "Outfits", "Items"];
  const chips = ["+ Add new", "💼 Work", "🎉 Leisure", "🎀 Design"];


  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saved</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {tabs.map((tab, index) => {
          const active = tab === "Collections";
          return (
            <TouchableOpacity
              key={index}
              style={[styles.tab, active && styles.tabActive]}
            >
              <Text style={[styles.tabText, active && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Chips */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        style={styles.chipScroll}
      >
        {chips.map((chip, i) => {
          const active = chip.includes("Work");
          return (
            <TouchableOpacity
              key={i}
              style={[styles.chip, active && styles.chipActive]}
            >
              <Text style={styles.chipText}>{chip}</Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>

      {/* Floating Button */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="sparkles-outline" size={22} color="#F97316" />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FAF7F3", // background off-white
  },
  header: {
    paddingHorizontal: 20,
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  tabs: {
    flexDirection: "row",
    paddingHorizontal: 20,
    marginBottom: 8,
  },
  tab: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    marginRight: 12,
  },
  tabActive: {
    backgroundColor: "#fff",
    elevation: 3, // shadow on Android
    shadowColor: "#000", // shadow on iOS
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
  },
  tabText: {
    color: "#6B7280",
    fontSize: 14,
    fontWeight: "500",
  },
  tabTextActive: {
    color: "#111827",
    fontWeight: "600",
  },
  chipScroll: {
    paddingHorizontal: 20,
    marginVertical: 8,
  },
  chip: {
    backgroundColor: "#F3F4F6",
    borderRadius: 20,
    paddingHorizontal: 14,
    paddingVertical: 8,
    marginRight: 12,
  },
  chipActive: {
    backgroundColor: "#FDE68A", // amber-ish for "Work"
  },
  chipText: {
    fontSize: 14,
    color: "#111827",
  },
  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingBottom: 100,
  },
  card: {
    width: "47%",
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 20,
    overflow: "hidden",
    elevation: 2,
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
  },
  cardImage: {
    width: "100%",
    height: 160,
    resizeMode: "contain",
  },
  bookmarkBtn: {
    position: "absolute",
    bottom: 10,
    right: 10,
    backgroundColor: "#fff",
    padding: 6,
    borderRadius: 50,
    elevation: 2,
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: "#E5E7EB",
    backgroundColor: "#fff",
  },
  fab: {
    position: "absolute",
    bottom: 12,
    right: 12,
    backgroundColor: "#fff",
    padding: 14,
    borderRadius: 50,
    elevation: 4,
  },
});
