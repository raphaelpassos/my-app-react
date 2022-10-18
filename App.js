import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'
import { FontAwesome5, Ionicons, MaterialIcons, Foundation, Fontisto } from '@expo/vector-icons'; 

import Home from './src/screens/Home';

import TelaInicial from './src/componentes/TelaInicial'  
import TelaHospedagem from './src/componentes/TelaHospedagem'
import TelaPasseios from './src/componentes/TelaPasseios'
import TelaRestaurantes from './src/componentes/TelaRestaurantes'
import TelaFavoritos from './src/componentes/TelaFavoritos'
import TelaMensagens from './src/componentes/TelaMensagens'
import TelaPerfil from './src/componentes/TelaPerfil'
import TelaCriação from './src/componentes/TelaCriação'


const Tabs = createBottomTabNavigator();
const Stack = createStackNavigator();   
  
export default function App() {
  return(
<NavigationContainer >
<Tabs.Navigator screenOptions={{ headerShown: false}}>
    <Tabs.Screen 
      name="Explorar" 
      component = { Home } 
      options={{
        tabBarIcon: () => (
          <Fontisto name="search" size={24} color="black" />
        ),
      }}
    /> 
    <Tabs.Screen 
      name="Criação" 
      component = { TelaCriação }
      options={{
        tabBarIcon: () => (
          <Ionicons name="create" size={24} color="black" />        
          ),
      }}
    />
    <Tabs.Screen 
      name="Favoritos" 
      component = { TelaFavoritos }
      options={{
        tabBarIcon: () => (
            <MaterialIcons name="favorite" size={24} color="black" />        ),
      }}
    />
    <Tabs.Screen 
      name="Mensagens" 
      component = { TelaMensagens }
      options={{
        tabBarIcon: () => (
            <Foundation name="comment" size={24} color="black" />        
            ),
      }}
    />
    <Tabs.Screen 
      name="Perfil" 
      component = { TelaPerfil }
      options={{
        tabBarIcon: () => (
            <Ionicons name="person-circle" size={25} color="black" />       
             ),
      }}
    />
</Tabs.Navigator>
</NavigationContainer> 
  )
};

