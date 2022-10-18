import React from "react";
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs';

const Tabs = createBottomTabNavigator();


import TelaFavoritos from './src/componentes/TelaFavoritos'
import TelaMensagens from './src/componentes/TelaMensagens'
import TelaPerfil from './src/componentes/TelaPerfil'
import TelaCriação from './src/componentes/TelaCriação'

const HomeTabNavigator = (props) =>{
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
}
export default HomeTabNavigator;