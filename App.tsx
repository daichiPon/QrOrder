import React from 'react';
import { View, Text } from 'react-native'; // ViewとTextをインポート
import QRCode from "./src/components/qrcode";

function App() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 24, textAlign: 'center', marginTop: 20 }}>QrOrder管理画面</Text>
    </View>
  );
}

export default App;
