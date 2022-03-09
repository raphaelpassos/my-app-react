import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';
import Musica from '../../assets/musica.jpg'
export default function TelaHospedagem() {
 return (
     <View style={ estilos.containerTelaHospedagem}>
        <Text>Pousadas e Hotéis em Paraty</Text>
        <Image 
        source={ Musica } 
        style={estilos.img}  
        />
     </View>
 );
}
 const estilos = StyleSheet.create({
    containerTelaHospedagem: {
      flex: 1,
      backgroundColor: '#ffdb58',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      marginTop: 20,
      marginBottom: 20,
      width: 150,
      height: 150
    }
  });