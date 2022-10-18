import React from 'react';
import {  StyleSheet, View, Button, Image, Text } from 'react-native';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native-web';
import styles from './styles';
import Post from '../Post';
import feed from '../../../assets/data/feed';
import SearchResultsScreen from '../../screens/SearchResults';
import DestinationSearchScreen from '../../screens/DestinationSearch';
import GuestsScreen from '../../screens/Guests';
import Router from '../../navigation/Router'

const post1 = feed[0];
const post2 = feed[1];
const post3 = feed[2];

export default function TelaHospedagem(props) {
 return (
<ScrollView>
    <View  style={ styles.header}>
        <Button title="Hospedagem"onPress={ ()=> props.navigation.navigate('TelaHospedagem')}/>
        <Button title="Passeios" onPress={ ()=> props.navigation.navigate('Passeios')}/>
        <Button title="Restaurantes" onPress={ ()=> props.navigation.navigate('Restaurantes')}/>
    </View>

    <SafeAreaView>
        <GuestsScreen/>
    </SafeAreaView> 
</ScrollView>


 );
}