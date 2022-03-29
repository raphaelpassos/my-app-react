import React from 'react';
import { StyleSheet, View, Button, Image, Text, Pressable } from 'react-native';
import Arte from '../../assets/arte.jpg';
import Icone from '../../assets/Rio-Icone.jpg'
export default function TelaInicial() {
  return (
      <View style={ estilos.containerTelaInicial}>
        <Image 
        source={ Arte } 
        style={estilos.img}  
        />
        <Pressable >
        <Image name= "Explorar" style={ estilos.botao } source={Icone}/>
      </Pressable>
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
    width: 350,
    height: 350,
    borderRadius: 75,
    borderColor: '#000',
    borderWidth: 2
  },
  botao:{
    width: 120,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: '#923',
    borderRadius: 20,
  }
});
