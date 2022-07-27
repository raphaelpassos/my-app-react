import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';
import { SafeAreaView, ScrollView } from 'react-native-web';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

const Restaurant = (props) => {

const restaurant = props.restaurant;

const navigation = useNavigation();

const goToPostPage = () => {
    navigation.navigate('Restaurant', {restaurantId: restaurant.id});
  }

 return (

<View  style={ styles.container}>
    
             {/*Image*/}
            <Image 
            style={styles.image} 
            source={{uri: restaurant.image}}
            />

             {/*Bed e Bedrom*/}
            <Text style={styles.place}> 
            {restaurant.bed} bed {restaurant.bedroom} bedrom  
            </Text>

            {/*Type e Description*/}
            <Text style={styles.description}>
            {restaurant.type}. {restaurant.title}. 
            </Text>

            {/*Old price e new price*/} 
            <Text style={styles.prices}>
                <Text style={styles.oldPrice}> ${restaurant.oldPrice}</Text>
                <Text style={styles.price}> ${restaurant.newPrice}</Text>
                    / night
            </Text>

             {/*Total price*/} 
             <Text style={styles.totalPrice}>${restaurant.totalPrice}</Text>
       </View>
 );
}
export default Restaurant;