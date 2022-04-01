import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import { createStackNavigator} from '@react-navigation/stack'
import { FontAwesome5, Ionicons, MaterialIcons, Foundation } from '@expo/vector-icons'; 

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
    <Tabs.Screen 
      name="Explorar" 
      component = { TelaInicial } 
      options={{
        tabBarIcon: () => (
          <FontAwesome5 name="home" size={24} color="black" />
        ),
      }}
    />
    <Tabs.Screen 
      name="Criação" 
      component = { TelaCriação }
      options={{
        tabBarIcon: () => (
          <Ionicons name="create" size={24} color="black" />        ),
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
            <Foundation name="comment" size={24} color="black" />        ),
      }}
    />
    <Tabs.Screen 
      name="Perfil" 
      component = { TelaPerfil }
      options={{
        tabBarIcon: () => (
            <Ionicons name="person-circle" size={25} color="black" />        ),
      }}
    />
</Tabs.Navigator>
</NavigationContainer> 
  )
};
function TelaCriação() {
  return(
<Stack.Navigator> 
<Stack.Screen name="Hospedagem" component = { TelaHospedagem } options={{ headerShown: false }}/>
<Stack.Screen name="Passeios" component = { TelaPasseios }/> 
<Stack.Screen name="Restaurantes" component = { TelaRestaurantes }/>
</Stack.Navigator>
  )
};
