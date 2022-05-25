import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import { ImageBackground } from 'react-native-web';
import Carna from '../../assets/images/carna.jpg'
import Fundo from '../../assets/images/Rio-Icone.jpg'
export default function TelaCriação(props) {
  return (
    <ImageBackground source={Fundo} style={estilos.fundo}>
      <View style={ estilos.containerTelaInicial}> 
         <Image  
        source={ Carna } 
        style={estilos.img}  
        />
      </View>
    </ImageBackground>
      
  );
}
const estilos = StyleSheet.create({
  containerTelaInicial: {
    flex: 1,
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
    borderWidth: 2,
    paddingVertical: 15,
    paddingHorizontal: 25,
  },
  fundo:{
  },
  buttonBox:{

  }
});
