import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'

import TelaInicial from './componentes/TelaInicial'
import TelaHospedagem from './componentes/TelaHospedagem'
import TelaPasseios from './componentes/TelaPasseios'
import TelaRestaurantes from './componentes/TelaRestaurantes'
import TelaFavoritos from './componentes/TelaFavoritos'
import TelaMensagens from './componentes/TelaMensagens'
import TelaPerfil from './componentes/TelaPerfil'

const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();

export default function App() {
  return(
<NavigationContainer >
<Tabs.Navigator screenOptions={{ headerShown: false}}>
<Tabs.Screen name="Explorar" component = { TelaInicial }/>
<Tabs.Screen name="Criação" component = { TelaCriação }/>
<Tabs.Screen name="Favoritos" component = { TelaFavoritos }/>
<Tabs.Screen name="Mensagens" component = { TelaMensagens }/>
<Tabs.Screen name="Perfil" component = { TelaPerfil }/>
</Tabs.Navigator>
</NavigationContainer>
  )
};
function TelaCriação() {
  return(
<Stack.Navigator> 
<Stack.Screen name="Hospedagem" component = { TelaHospedagem }/>
<Stack.Screen name="Passeios" component = { TelaPasseios }/> 
<Stack.Screen name="Restaurantes" component = { TelaRestaurantes }/>
</Stack.Navigator>
  )
};
