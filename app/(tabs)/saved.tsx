// App.tsx
import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import CollectionCard from "@/components/CollectionCard";

const chips = ["💼 Work", "🎉 Leisure", "🎀 Design"];
const tabs = ["Collections", "Outfits", "Items"];
const _filterWidth = 90;
const _filterheight = 36;

const dummyData = [
  {
    "leftImage": 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg',
    "right1": "https://images.pexels.com/photos/2693849/pexels-photo-2693849.jpeg",
    "right2": "https://images.pexels.com/photos/3054973/pexels-photo-3054973.jpeg"
  },
  {
    "leftImage": "https://images.pexels.com/photos/2584269/pexels-photo-2584269.jpeg",
    "right1": "https://images.pexels.com/photos/2681751/pexels-photo-2681751.jpeg",
    "right2": "https://images.pexels.com/photos/2752045/pexels-photo-2752045.jpeg",
  },
  {
    "leftImage": "https://images.pexels.com/photos/1485031/pexels-photo-1485031.jpeg",
    "right1": "https://images.pexels.com/photos/1631181/pexels-photo-1631181.jpeg",
    "right2": "https://images.pexels.com/photos/1183266/pexels-photo-1183266.jpeg",
  },
  {
    "leftImage": "https://images.pexels.com/photos/2010812/pexels-photo-2010812.jpeg",
    "right1": "https://images.pexels.com/photos/2233703/pexels-photo-2233703.jpeg",
    "right2": "https://images.pexels.com/photos/2065195/pexels-photo-2065195.jpeg",
  },
]

export default function App() {
  const [selectedTab, setSelectedTab] = useState('Collections');
  const [selectedFilter, setSelectedFilter] = useState('Work')
  const [data, setData] = useState([...dummyData])

  return (
    <SafeAreaView style={styles.container} edges={['left', 'right', 'top']}>
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

      <FlatList
        data={data}
        renderItem={({ item }) => {
          return (
            <CollectionCard item={item} />
          )
        }}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          gap: 16,
          paddingBottom: 20,
        }}
      />

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
    paddingHorizontal: 12,
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
  mainContent: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  addChip: {
    borderRadius: 20,
    borderStyle: 'dashed',
    borderWidth: 1,
    borderColor: '#00000050',
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
