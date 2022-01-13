import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';

export default function TelaInicial() {
  return (
      <View style={ estilos.containerTelaInicial}>
       <Text>TelaInicial</Text>
      </View>
  );
}
const estilos = StyleSheet.create({
  containerTelaInicial: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
