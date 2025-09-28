// App.tsx
import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Ionicons from '@expo/vector-icons/Ionicons';
import Section from "@/components/Section";

const tabs = ["Collections", "Outfits", "Items"];


export const dummyData = [
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

      {selectedTab === 'Collections' && <Section data={data} isCollections={true} />}
      {selectedTab === 'Outfits' && <Section data={data.reverse()} />}

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
