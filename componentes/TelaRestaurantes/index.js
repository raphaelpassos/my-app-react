import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-web';
  import Teatro from '../../assets/teatro.jpg'
export default function TelaRestaurantes() {
  return (
    <ScrollView>
       <View style={ estilos.containerTelaRestaurantes}>
       <Text>Tela de Restaurantes</Text>
       <Image 
        source={ Teatro } 
        style={estilos.img}  
        />
        <Image 
        source={ Teatro } 
        style={estilos.img1}  
        />
        <Image 
        source={ Teatro } 
        style={estilos.img2}  
        />
        <Image 
        source={ Teatro } 
        style={estilos.img3}  
        />
      </View>
    </ScrollView>
)};
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
    width: 350,
    height: 350,
    borderColor: '#000',
    borderWidth: 2
  },
  img1:{
    marginTop: 20,
    marginBottom: 30,
    marginLeft: 5,
    marginRight: 10,
    width: 350,
    height: 350,
    borderColor: '#000',
    borderWidth: 2,
    alignItems: 'right'
  },
  img2:{
    marginTop: 20,
    marginBottom: 20,
    width: 350,
    height: 350,
    borderColor: '#000',
    borderWidth: 2
  },
  img3:{
    marginTop: 20,
    marginBottom: 20,
    width: 350,
    height: 350,
    borderColor: '#000',
    borderWidth: 2
  }
});