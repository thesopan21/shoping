// App.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';

const chips = ["💼 Work", "🎉 Leisure", "🎀 Design"];
const tabs = ["Collections", "Outfits", "Items"];
const _filterWidth = 90;
const _filterheight = 36;

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Collections');
  const [selectedFilter, setSelectedFilter] = useState('Work')

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Saved</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabs}>
        {tabs.map((tab, index) => {
          const active = tab === selectedTab;
          return (
            <TouchableOpacity
              key={index}
              style={[styles.tab, active && styles.tabActive]}
              onPress={() => setSelectedTab(tab)}
            >
              <Text style={[styles.tabText, active && styles.tabTextActive]}>
                {tab}
              </Text>
            </TouchableOpacity>
          );
        })}
      </View>

      {/* Chips */}
      <View style={styles.mainContent}>
        <TouchableOpacity style={[styles.addChip]} >
          <Text style={styles.chipText}>+ Add new</Text>
        </TouchableOpacity>
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.chipScrollContainer}
        >
          {chips.map((chip, i) => {
            const active = chip.includes(selectedFilter);
            return (
              <TouchableOpacity
                key={i}
                style={[styles.chip, active && styles.chipActive]}
                onPress={() => setSelectedFilter(chip)}
              >
                <Text style={styles.chipText}>{chip}</Text>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>

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
    backgroundColor: "#f1efedff",
    paddingHorizontal: 20,
  },
  header: {
    paddingVertical: 12,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: "700",
    color: "#111827",
  },
  tabs: {
    flexDirection: "row",
    justifyContent: 'space-between',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#e4131350',
    borderRadius: 20,
    marginBottom: 8,
    padding: 2.5
  },
  tab: {
    paddingVertical: 8,
    borderRadius: 20,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  tabActive: {
    backgroundColor: "#fff",
    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 1 },
    shadowRadius: 2,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#e4131350',
  },
  tabText: {
    color: "gray",
    fontSize: 14,
    fontWeight: "400",
  },
  tabTextActive: {
    color: "#111827",
    fontWeight: "900",
  },
  mainContent:{
    flexDirection:'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addChip:{
    borderRadius: 20,
    borderStyle:'dashed',
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#8b797950',
    width: _filterWidth,
    height: _filterheight,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5
  },
  chipScrollContainer: {
    marginVertical: 8,
    gap: 5
  },
  chip: {
    backgroundColor: "#ffffff",
    borderRadius: 20,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: '#8b797950',
    width: _filterWidth,
    height: _filterheight,
    justifyContent: 'center',
    alignItems: 'center',
  },
  chipActive: {
    backgroundColor: "#ff818150",
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
