import { ScrollView, StyleSheet, Text, TouchableOpacity, View, FlatList, ActivityIndicator } from 'react-native'
import React, { FC, useState } from 'react'
import CollectionCard from './CollectionCard';
import { dummyData } from '@/app/(tabs)/saved';

interface SectionProps {
  isCollections?: boolean;
  data: any[]
}

const _filterWidth = 90;
const _filterheight = 36;
const chips = ["💼 Work", "🎉 Leisure", "🎀 Design"];

const Section: FC<SectionProps> = ({
  isCollections = false,
  data
}) => {
  const [selectedFilter, setSelectedFilter] = useState('Work')

  if (data.length <= 0) {
    <ActivityIndicator size={'large'} color={'red'} />
  }

  return (
    <View>
      {isCollections &&
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
      }
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
    </View>
  )
}

export default Section

const styles = StyleSheet.create({
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
})