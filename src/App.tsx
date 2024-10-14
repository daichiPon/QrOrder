import React from 'react';
import { View, Text } from 'react-native'; // ViewとTextをインポート
import { CompositeNavigationProp, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QRCode from './components/qrcode';
import Drink from "./components/drink"

const Stack= createNativeStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        component={QRCode}
        name="メニュー"
        ></Stack.Screen>
        <Stack.Screen
        component={Drink}
        name="ドリンク">
        </Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
