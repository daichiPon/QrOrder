import React from 'react';
import { View, Text } from 'react-native'; // ViewとTextをインポート
import { CompositeNavigationProp, NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import QRCode from './src/components/qrcode';

const Stack= createNativeStackNavigator()
function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
        component={QRCode}
        name="メニュー"
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
