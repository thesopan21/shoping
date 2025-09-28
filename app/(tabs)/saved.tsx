import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const saved = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Saved</Text>
    </View>
  )
}

export default saved

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
})