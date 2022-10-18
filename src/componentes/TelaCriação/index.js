import React from 'react';
import { StyleSheet, View, Button, Image, Text } from 'react-native';
import { SafeAreaView, ScrollView, StatusBar } from 'react-native-web';
import {NavigationContainer} from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import TelaHospedagem from '../TelaHospedagem'
import TelaPasseios from '../TelaPasseios'
import TelaRestaurantes from '../TelaRestaurantes'
import Router from '../../navigation/Router'

const Stack = createStackNavigator();


export default function TelaCriação() {
    return(
<Stack.Navigator >
  <Stack.Screen name="Hospedagem" component = { TelaHospedagem } options={{ headerShown: false }}/>
  <Stack.Screen name="Passeios" component = { TelaPasseios } options={{ headerShown: false }}/> 
  <Stack.Screen name="Restaurantes" component = { TelaRestaurantes }/>
  </Stack.Navigator>
    )
  };


