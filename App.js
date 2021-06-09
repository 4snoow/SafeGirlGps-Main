import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from './src/views/Home'
import Menu from './src/views/Menu'
import Alerta from './src/views/Alerta'
import Mapa from './src/views/Mapa'
import Assistente from './src/views/Assistente'
import Policia from './src/views/Policia'

export default function App() {

  const Stack = createStackNavigator();

  return (
    <NavigationContainer>
      <Stack.Navigator>

        <Stack.Screen
         name="Home" 
         component={Home}
         options={{
          title: 'Safe Girl',
          headerStyle: {
            backgroundColor: '#AF3563',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerTitleAlign: 'center'
        }}  
         />

        <Stack.Screen 
          name="Menu" 
          component={Menu}
          options={{
            title: 'Menu',
            headerStyle: {
              backgroundColor: '#AF3563',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}   
          />

        <Stack.Screen 
          name="Alerta" 
          component={Alerta}
          options={{
            title: 'Alerta',
            headerStyle: {
              backgroundColor: '#AF3563',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}   
          />

        <Stack.Screen 
          name="Mapa" 
          component={Mapa}
          options={{
            title: 'Mapa',
            headerStyle: {
              backgroundColor: '#AF3563',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}   
          />

        <Stack.Screen 
          name="Assistente" 
          component={Assistente}
          options={{
            title: 'Assistente',
            headerStyle: {
              backgroundColor: '#AF3563',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}   
          />

        <Stack.Screen 
          name="Policia" 
          component={Policia}
          options={{
            title: 'Policia',
            headerStyle: {
              backgroundColor: '#AF3563',
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
            },
            headerTitleAlign: 'center'
          }}   
          />

      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
}
