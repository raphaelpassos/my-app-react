import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';

export default function TelaPasseios() {
  return (
      <View style={ estilos.containerTelaPasseios}>
       <Text>Tela de Passeios</Text>
      </View>
  );
}
const estilos = StyleSheet.create({
  containerTelaPasseios: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});