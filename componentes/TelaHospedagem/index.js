import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';
import Musica from '../../assets/musica.jpg'
export default function TelaHospedagem(props) {
 return (
     <View style={ estilos.containerTelaHospedagem}>
        <Text>Pousadas e Hotéis em Paraty</Text>
        <Image />
        <View style={estilos.boxBotao}>
        <Button title="Hospedagem"onPress={ ()=> props.navigation.navigate('TelaHospedagem')}/>
        <Button title="Passeios" onPress={ ()=> props.navigation.navigate('Passeios')}/>
        <Button title="Restaurantes" onPress={ ()=> props.navigation.navigate('Restaurantes')}/>
        </View>
        
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
      width: 350,
      height: 350,
      borderRadius: 75,
    borderColor: '#000',
    borderWidth: 2
    },
  boxBotao:{
    marginBottom: 10,
  }
  });