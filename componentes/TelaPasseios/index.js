import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import Teatro from '../../assets/teatro.jpg'
export default function TelaPasseios() {
  return (
      <View style={ estilos.containerTelaPasseios}>
       <Image 
        source={ Teatro } 
        style={estilos.img}  
        />
      </View>
  );
}
const estilos = StyleSheet.create({
  containerTelaPasseios: {
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