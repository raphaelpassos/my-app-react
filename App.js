import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaHospedagem from './componentes/TelaHospedagem'
import TelaInicial from './componentes/TelaInicial'
import TelaPasseios from './componentes/TelaPasseios'
import TelaRestaurantes from './componentes/TelaRestaurantes'

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
     <Tabs.Navigator>
       <Tabs.Screen name="Hospedagem" component = { TelaHospedagem }/>
       <Tabs.Screen name="Inicial" component = { TelaInicial }/>
       <Tabs.Screen name="TelaPasseios" component = { TelaPasseios }/>
       <Tabs.Screen name="TelaRestaurantes" component = { TelaRestaurantes }/>
       </Tabs.Navigator>
      </NavigationContainer>
 )
}

/*  */
