import React from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import LogoTreinta from '../components/LogoTreinta'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import BackButton from '../components/BackButton'
import { StyleSheet } from 'react-native'

const Info = ({ navigation }) => {

  return (
    <Background>
      <BackButton goBack={navigation.goBack} />
      <LogoTreinta />
      <Header>Treinta</Header>
      <Header>¡Aplicación financiera gratuita!</Header>
      <Paragraph>
      Gestiona las transacciones de tu negocio, conoce la utilidad de tu negocio en cualquier momento y registra y cobra deudas 3 veces más eficazmente.
Ayuda a tu negocio a crecer más con Treinta, la aplicación financiera gratuita. ¡Treinta es gratis, seguro y fácil de usar!
    </Paragraph>
    </Background>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  map: {
    width: 400,
    height: 400,
  },
});

export default Info
