import React from 'react';
import Login from './components/screen/login';
import Registro from './components/screen/registro';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Datos from './components/screen/datos';




const Stack = createStackNavigator();

const App:() => React$Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="INICIO DE SESIÓN" component={Login} />
        <Stack.Screen name="REGISTRO EN LA APP" component={Registro} />
        <Stack.Screen name='INFORMACIÓN DEL USUARIO' component={Datos} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
