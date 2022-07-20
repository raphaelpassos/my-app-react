import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';
import styles from './styles';
import passeio from '../../../assets/images/Rio-Icone.jpg'



export default function Passeios(props) {
 return (

<View  style={ styles.container}>
    
             {/*Image*/}
            <Image 
            style={styles.image} 
            source={passeio}
            />

             {/*Bed e Bedrom*/}
            <Text style={styles.passeio}> Passeio no Pão de Açucar </Text>

            {/*Type e Description*/}
            <Text style={styles.description}>Um excelente passeio pelo
            Pão de Açucar, com vista para o mar carioca e o Cristo Redentor .
            </Text>

            {/*Old price e new price*/} 
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}> $138</Text>
                <Text style={styles.price}> $140</Text>
                    / night
            </Text>

             {/*Total price*/} 
             <Text style={styles.totalPrice}>$390total</Text>
       </View>
 );
}