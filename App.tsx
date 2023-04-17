import { Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { HomeScreen } from './src/screens/HomeScreen';
import { LoginScreen } from './src/screens/LoginScreen';
import { ItemScreen } from './src/screens/ItemScreen';

export type RootStackParamList = {
  Home: undefined,
  Login: undefined;
  Item: {
    id: string,
    name: string,
    imageURL: string
  }
}

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" component={LoginScreen} options={{
          title: 'Valorant Skin Checker',
          headerTitleStyle: {
            fontWeight: 'bold'
          },
          headerRight: () => (
            <Button title='Hello' />
          )

        }} />
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Item" component={ItemScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}