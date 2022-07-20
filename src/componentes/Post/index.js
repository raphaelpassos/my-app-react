import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';
import styles from './styles';
import hotel1 from '../../../assets/images/hotel1.jpg'
import hotel2 from '../../../assets/images/hotel2.jpg'
import hotel3 from '../../../assets/images/hotel3.jpg'
import hotel4 from '../../../assets/images/hotel4.jpg'
import hotel5 from '../../../assets/images/hotel5.jpg'
import hotel6 from '../../../assets/images/hotel6.jpg'


export default function Post(props) {
 return (

<View  style={ styles.container}>
    
             {/*Image*/}
            <Image 
            style={styles.image} 
            source={hotel1}
            />

             {/*Bed e Bedrom*/}
            <Text style={styles.bedroms}> 1 bed 1 bedrom </Text>

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