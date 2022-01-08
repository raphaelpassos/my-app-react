import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import './App.css';

import TelaHospedagem from './componentes/TelaHospedagem'
import TelaInicial from './componentes/TelaInicial'
import TelaPasseios from './componentes/TelaPasseios'
import TelaRestaurantes from './componentes/TelaRestaurantes'

const Tabs = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer >
       <Tabs.Navigator>
       <div className="App">
       <Tabs.Screen name="TelaHospedagem" component = { TelaHospedagem }/>
       <Tabs.Screen name="TelaInicial" component = { TelaInicial }/>
       <Tabs.Screen name="TelaPasseios" component = { TelaPasseios }/>
       <Tabs.Screen name="TelaRestaurantes" component = { TelaRestaurantes }/>
        </div>
       </Tabs.Navigator>
    </NavigationContainer>
  );
}
