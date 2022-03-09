import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import Carna from '../../assets/carna.jpg'
export default function TelaInicial() {
  return (
      <View style={ estilos.containerTelaInicial}>
         <Image 
        source={ Carna } 
        style={estilos.img}  
        />
      </View>
  );
}
const estilos = StyleSheet.create({
  containerTelaInicial: {
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
