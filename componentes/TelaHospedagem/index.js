import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';

export default function TelaHospedagem() {
 return (
     <View style={ estilos.containerTelaHospedagem}>
        <Text>Hospedagem</Text>
        <Text>Pousadas e Hotéis em Paraty</Text>
     </View>
 );
}
 const estilos = StyleSheet.create({
    containerTelaHospedagem: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
  });