import React from 'react'
import { Image, StyleSheet } from 'react-native'

const LogoTreinta = () => (
  <Image source={require('../assets/logotreinta.png')} style={styles.image} />
)

const styles = StyleSheet.create({
  image: {
    width: 200,
    height: 200,
    marginBottom: 8,
  },
})

export default LogoTreinta
