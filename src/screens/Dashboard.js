import React, { useState,useEffect  } from 'react'
import Background from '../components/Background'
import Logo from '../components/Logo'
import Header from '../components/Header'
import Paragraph from '../components/Paragraph'
import Button from '../components/Button'
import { StyleSheet } from 'react-native'

import MapView, { Marker } from 'react-native-maps';

import useFetch from 'use-http'



const Dashboard = ({ navigation }) => {


  const { loading, error, data = [] } = useFetch('https://uaejrc0pgd.execute-api.us-east-1.amazonaws.com/test', {}, [])


  return (
    <Background>
      <Logo />
      <Header>Mapa de los negocios</Header>

      <MapView style={styles.map}
        initialRegion={{
          latitude: 4.599790,
          longitude: -74.095667,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }} >

        {data.body && data.body.map((marker, index) => (
            <Marker
              key={index}
              coordinate={{ latitude: marker.lat, longitude: marker.lng }}
              title={marker.title}
              description={marker.description}
            />
          ))}
      </MapView>

      <Paragraph>
        aqui podras encontrar tus negocios
    </Paragraph>
      <Button
        mode="outlined"
        onPress={() =>
          navigation.reset({
            index: 0,
            routes: [{ name: 'StartScreen' }],
          })
        }
      >
        Logout
    </Button>
    <Button
        mode="contained"
        onPress={() => navigation.navigate('Info')}
      >
        Conoce Treinta
    </Button>
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

export default Dashboard
