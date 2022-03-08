import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import TelaInicial from './componentes/TelaInicial'
import TelaCriação from './componentes/TelaCriação'
import TelaHospedagem from './componentes/TelaHospedagem'
import TelaPasseios from './componentes/TelaPasseios'
import TelaRestaurantes from './componentes/TelaRestaurantes'
import Musica from './assets/musica.jpg'
const Tabs = createBottomTabNavigator();

export default function App() {
  return(
<NavigationContainer >
<Tabs.Navigator screenOptions={{ headerShown: false}}>
<Tabs.Screen name="Início" component = { TelaInicial }/>
<Tabs.Screen name="Criação" component = { TelaCriação }/>
<Tabs.Screen name="Hospedagem" component = { TelaHospedagem }/>
<Tabs.Screen name="Passeios" component = { TelaPasseios }/>
<Tabs.Screen name="Restaurantes" component = { TelaRestaurantes }/>
</Tabs.Navigator>
</NavigationContainer>
  )
};
