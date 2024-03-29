import React from 'react';
import { ImageBackground, View, Text, Pressable } from 'react-native-web';
import styles from './styles'
import Wallpaper from '../../../assets/images/wallpaper.jpg';
import { Fontisto } from '@expo/vector-icons'; 
import { useNavigation } from '@react-navigation/native';

const TelaInicialScreen = (props) => {
    const navigation = useNavigation();
    return (
        <View>

            <Pressable style={styles.searchButton} 
            onPress={() => navigation.navigate('Destination Search')}>
                <Fontisto name='search' size={25} color={'#f15454'}/>
                <Text style={styles.searchButtonText}>Where are you going?</Text>
            </Pressable>

            <ImageBackground source={Wallpaper} style={styles.image}>

            <Text style={styles.title}> Go near </Text>

            <Pressable style={styles.button} 
            onPress={() => console.warn('Explore Btn clicked')}>
                <Text style={styles.buttonText}>Explore near by stays</Text>
            </Pressable>

            </ImageBackground>

        </View>
    )
};
export default TelaInicialScreen;