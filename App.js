/*import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ClienteScreen from './ClienteScreen';
import ProfissionalListScreen from './ProfissionalListScreen';
import LoginScreen from './LoginScreen';
import ProfissionalScreen from './ProfissionalScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ClienteScreen" component={ClienteScreen} />
        <Stack.Screen name="ProfissionalListScreen" component={ProfissionalListScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="ProfissionalScreen" component={ProfissionalScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;*/

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './HomeScreen';
import ClienteScreen from './ClienteScreen';
import ProfissionalListScreen from './ProfissionalListScreen';
import LoginScreen from './LoginScreen';
import CadastroScreen from './CadastroScreen';

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="ClienteScreen" component={ClienteScreen} />
        <Stack.Screen name="ProfissionalListScreen" component={ProfissionalListScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="CadastroScreen" component={CadastroScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
