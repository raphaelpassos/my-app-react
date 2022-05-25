import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';
import { ScrollView } from 'react-native-web';
import styles from './styles';
import hotel1 from '../../../assets/images/hotel1.jpg'
import hotel2 from '../../../assets/images/hotel2.jpg'
import hotel3 from '../../../assets/images/hotel3.jpg'
import hotel4 from '../../../assets/images/hotel4.jpg'
import hotel5 from '../../../assets/images/hotel5.jpg'
import hotel6 from '../../../assets/images/hotel6.jpg'


export default function TelaHospedagem(props) {
 return (
<ScrollView>
<View style={styles.boxBotao}>
       <Button title="Hospedagem"onPress={ ()=> props.navigation.navigate('TelaHospedagem')}/>
       <Button title="Passeios" onPress={ ()=> props.navigation.navigate('Passeios')}/>
       <Button title="Restaurantes" onPress={ ()=> props.navigation.navigate('Restaurantes')}/>
   
   <View style={ styles.container}>
        {/*Image*/}
        <Image 
            style={styles.image1} 
            source={hotel1}
            />
             <Image 
            style={styles.image2} 
            source={hotel2}
            />
             <Image 
            style={styles.image3} 
            source={hotel3}
            />
             <Image 
            style={styles.image4} 
            source={hotel4}
            />
             <Image 
            style={styles.image5} 
            source={hotel5}
            />
             <Image 
            style={styles.image6} 
            source={hotel6}
            />

        {/*Bed e Bedrom*/}

        {/*Type e Description*/}

        {/*Old price e new price*/}

        {/*Total price*/} 
             
       </View>
       </View>
</ScrollView>
 );
}