import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
  
export default function TelaRestaurantes() {
  return (
      <View style={ estilos.containerTelaRestaurantes}>
       <Text>Tela de Restaurantes</Text>
      </View>
  );
}
const estilos = StyleSheet.create({
  containerTelaRestaurantes: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});