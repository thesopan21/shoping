import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'

const CollectionCard = () => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: 'https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg' }} style={styles.cardImageLeft} />
      <View style={styles.imageContainer}>
        <Image source={{ uri: "https://images.pexels.com/photos/2693849/pexels-photo-2693849.jpeg" }} style={styles.cardImageRight} />
        <Image source={{ uri: "https://images.pexels.com/photos/3054973/pexels-photo-3054973.jpeg" }} style={styles.cardImageRight} />
      </View>

      <TouchableOpacity style={styles.bookmarkBtn}>
        <Ionicons name="bookmark-outline" size={18} color="#111" />
      </TouchableOpacity>
    </View>
  )
}

export default CollectionCard

const styles = StyleSheet.create({
  card: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 12,
    elevation: 2,
    overflow: 'hidden',
    shadowColor: "#000",
    shadowOpacity: 0.05,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 3,
    height: 360,
    flexDirection:'row',
    padding: 2,
    gap: 2,
    justifyContent:'space-between'
  },
  imageContainer: {
    // height: '99%',
    // width: '49%',
    flex: 1,
    gap: 2
  },
  cardImageLeft: {
    // width: '49%',
    // height: '99%',
    // resizeMode: "cover",
    borderRadius: 12,
    flex: 1
  },
  cardImageRight: {
    // width: "100%",
    // height: "50%",
    flex: 1,
    resizeMode: "cover",
    borderRadius: 12,
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
})