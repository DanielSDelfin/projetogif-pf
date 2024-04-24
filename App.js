import React from "react";
import{NavigationContainer} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'

import 'react-native-gesture-handler';

import TelaInicial from "./src/Telas/TelaInicial";
import TelaDetalhes from "./src/Telas/Detalhes";
import TelaResultado from "./src/Telas/Resultado";

const Stack = createStackNavigator();

const App= ()=>{

  

  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen 
          name='TelaInicial' component={TelaInicial}
          options={{headerShown:false}}
        />
        <Stack.Screen name='TelaDetalhes' component={TelaDetalhes}
        options={{headerShown:false}}
        />
        <Stack.Screen name='TelaResultado' component={TelaResultado}
        options={{headerShown:false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
