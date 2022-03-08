import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
  import Teatro from '../../assets/teatro.jpg'
export default function TelaRestaurantes() {
  return (
      <View style={ estilos.containerTelaRestaurantes}>
       <Text>Tela de Restaurantes</Text>
       <Image 
        source={ Teatro } 
        style={estilos.img}  
        />
      </View>
  );
}
const estilos = StyleSheet.create({
  containerTelaRestaurantes: {
    flex: 1,
    backgroundColor:  '#ffdb58',
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