import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';
import styles from './styles';
import restaurant from '../../../assets/images/restaurante.jpg'

export default function Restaurant(props) {
 return (

<View  style={ styles.container}>
    
             {/*Image*/}
            <Image 
            style={styles.image} 
            source={restaurant}
            />

             {/*Bed e Bedrom*/}
            <Text style={styles.place}> 1 place  </Text>

            {/*Type e Description*/}
            <Text style={styles.description}>Our excellent location, right 
            on Paseo de Gracia, allows you to easily reach most of the main 
            tourist attractions on foot, as well as any of the city's convention 
            centers, just a few minutes away by private 
            or public transport.
            </Text>

            {/*Old price e new price*/} 
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}> $36</Text>
                <Text style={styles.price}> $40</Text>
                    / night
            </Text>

             {/*Total price*/} 
             <Text style={styles.totalPrice}>$238 total</Text>
       </View>
 );
}