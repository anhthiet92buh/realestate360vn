import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import routes from '@routes';

const Stack = createNativeStackNavigator();

const AppContainer = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="HomeScreen" component={routes.HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default AppContainer;