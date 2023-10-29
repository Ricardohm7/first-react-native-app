import { View, Text, FlatList, Dimensions } from 'react-native'
import React from 'react'
import styles from './styles'
import cars from './cars'
import CardItem from '../CardItem'

export default function CarList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => <CardItem car={item} />}
        showsVerticalScrollIndicator={false}
        snapToAlignment='start'
        decelerationRate='fast'
        snapToInterval={Dimensions.get('window').height}
      />
    </View>
  )
}