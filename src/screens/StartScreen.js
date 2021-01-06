import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Button from '../components/Button'
import Paragraph from '../components/Paragraph'
import { StyleSheet } from 'react-native'

const StartScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header>Bienvenido</Header>
    <Paragraph>
    visualiza los negocios existentes en la ciudad de Bogotá!
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Login
    </Button>
    <Button
      mode="outlined"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign Up
    </Button>
    <Button
        style={styles.info}
        mode="contained"
        onPress={() => navigation.navigate('Info')}
      >
        Conoce sobre Treinta
    </Button>
  </Background>
)

const styles = StyleSheet.create({
  info: {
    bottom: 0,
    position: 'absolute'
  },
});

export default StartScreen
