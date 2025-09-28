import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";

const items = [
  {
    id: "1",
    title: "Knot Detail KnitTop",
    tag: "Crop",
    tagType: "work",
    image:
      "https://images.pexels.com/photos/428340/pexels-photo-428340.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "2",
    title: "Motif Printed Blouse",
    tag: "Crop",
    tagType: "leisure",
    image:
      "https://images.pexels.com/photos/428338/pexels-photo-428338.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "3",
    title: "Striped Shirt",
    tag: null,
    tagType: null,
    image:
      "https://images.pexels.com/photos/2983464/pexels-photo-2983464.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
  {
    id: "4",
    title: "Denim Shorts",
    tag: null,
    tagType: null,
    image:
      "https://images.pexels.com/photos/4046306/pexels-photo-4046306.jpeg?auto=compress&cs=tinysrgb&w=600",
  },
];

const _filterWidth = 90;
const _filterheight = 36;
const _filters = ["Type", "Style", "Mood", "Color"]

export default function ItemsTab() {


  const [selectedFilter, setSelectedFilter] = useState('Type')

  const renderItem = ({ item }: any) => (
    <View style={styles.card}>
      <Image source={{ uri: item.image }} style={styles.image} />
      {item.tag && (
        <View
          style={[
            styles.tag,
            item.tagType === "work"
              ? styles.workTag
              : item.tagType === "leisure"
                ? styles.leisureTag
                : null,
          ]}
        >
          <Text style={styles.tagText}>{item.tag}</Text>
        </View>
      )}
      <TouchableOpacity style={styles.bookmark}>
        <Ionicons name="bookmark" size={18} color="#111" />
      </TouchableOpacity>
      <Text style={styles.title}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>

      {/* Filters */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.chipScrollContainer}
      >

        {_filters.map((f, i) => {

          const active = f.includes(selectedFilter);
          return (
            <TouchableOpacity
              key={i}
              style={[styles.chip, active && styles.chipActive]}
              onPress={() => setSelectedFilter(f)}
            >
              <Text style={[styles.chipText, active && styles.activeChipText]}>{f}</Text>
              <Ionicons name="chevron-down" size={14} color="black" />
            </TouchableOpacity>
          )
        })}
      </ScrollView>

      <FlatList
        data={items}
        keyExtractor={(item) => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
  },
  header: {
    fontSize: 24,
    fontWeight: "700",
    marginTop: 10,
    marginBottom: 15,
  },
  tabs: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginBottom: 15,
  },
  tab: {
    fontSize: 14,
    paddingVertical: 6,
    paddingHorizontal: 16,
    borderRadius: 20,
    backgroundColor: "#F3EFEA",
    color: "#444",
  },
  activeTab: {
    backgroundColor: "#fff",
    fontWeight: "700",
    color: "#000",
  },
  filters: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 15,
  },
  chipScrollContainer: {
    marginVertical: 8,
    marginBottom: 12,
    gap: 5
  },
  chip: {
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#ff818150',
    width: _filterWidth,
    height: _filterheight,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    gap: 4
  },
  chipActive: {
    backgroundColor: "#ff818150",
  },
  chipText: {
    fontSize: 14,
    color: "#111827",
  },
  activeChipText:{
    fontWeight:'600'
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 18,
    paddingBottom: 8,
    width: "48%",
    overflow: "hidden",
    elevation: 2,
  },
  image: {
    width: "100%",
    height: 160,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
    resizeMode: "cover",
  },
  tag: {
    position: "absolute",
    bottom: 40,
    left: 10,
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 8,
  },
  workTag: { backgroundColor: "#EADFD5" },
  leisureTag: { backgroundColor: "#FADADD" },
  tagText: {
    fontSize: 12,
    fontWeight: "600",
    color: "#444",
  },
  bookmark: {
    position: "absolute",
    top: 8,
    right: 8,
    backgroundColor: '#f3f0f096',
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 24
  },
  title: {
    fontSize: 13,
    fontWeight: "500",
    marginTop: 6,
    marginLeft: 8,
    color: "#333",
  },
  bottomNav: {
    flexDirection: "row",
    justifyContent: "space-around",
    paddingVertical: 14,
    backgroundColor: "#fff",
    borderTopWidth: 1,
    borderTopColor: "#eee",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
  navIcon: { fontSize: 20, color: "#888" },
  activeNav: { color: "#000" },
});
