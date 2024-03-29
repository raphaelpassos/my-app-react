import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';
import Musica from '../../../assets/images/musica.jpg'
export default function TelaPerfil() {
 return (
     <View style={ estilos.containerTelaPerfil}>
        <Text>Pousadas e Hotéis em Paraty</Text>
        <Image 
        source={ Musica } 
        style={estilos.img}  
        />
     </View>
 );
}
 const estilos = StyleSheet.create({
    containerTelaPerfil: {
      flex: 1,
      backgroundColor: '#ffdb58',
      alignItems: 'center',
      justifyContent: 'center',
    },
    img:{
      marginTop: 20,
      marginBottom: 20,
      width: 350,
      height: 350,
      borderRadius: 75,
    borderColor: '#000',
    borderWidth: 2
    }
  });