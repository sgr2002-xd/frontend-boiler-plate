import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import Home from './Home'
import SeedPhase from './SeedPhase';

const Stack = createStackNavigator();


const CypherStack = () => {
  return(
    <Stack.Navigator initialRouteName='Home'>
      <Stack.Screen
        name="Home"
        component={Home}
        options={({navigation}) => ({
          headerTintColor: 'white',
          headerStyle: { backgroundColor: 'gold' },
        })}
      />
      <Stack.Screen
            name="SeedPhase"
            component={SeedPhase}
            options={({navigation}) => ({
              headerTintColor: 'white',
              headerStyle: { backgroundColor: 'gold' },
            })}
          />
    </Stack.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      <CypherStack/>
    </NavigationContainer>
  );
}
