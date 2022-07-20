import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native-web';
import styles from './styles';
import Post from '../Post';


export default function TelaHospedagem(props) {
 return (
<ScrollView>
    <View  style={ styles.header}>
        <Button title="Hospedagem"onPress={ ()=> props.navigation.navigate('TelaHospedagem')}/>
        <Button title="Passeios" onPress={ ()=> props.navigation.navigate('Passeios')}/>
        <Button title="Restaurantes" onPress={ ()=> props.navigation.navigate('Restaurantes')}/>
    </View>
<StatusBar barStyle="dark-content"/>
    <SafeAreaView>
        <Post/>
        <Post/>
        <Post/>
    </SafeAreaView>
</ScrollView>

 );
}