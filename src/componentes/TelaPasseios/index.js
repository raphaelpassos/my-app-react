import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native-web';
import SearchResultsScreen from '../../screens/SearchResults';
import Passeios from '../Passeios';

export default function TelaPasseios() {
  return (
    <ScrollView>
<StatusBar barStyle="dark-content"/>
    <SafeAreaView>
       <SearchResultsScreen/>
    </SafeAreaView>
</ScrollView>
  );
}
