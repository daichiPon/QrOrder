"use client";
import * as React from 'react';
import { Button, View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const QRCode: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <Button 
      title="GotoDrink"
      onPress={() => { navigation.navigate("ドリンク") }}
    />
  );
};

export default QRCode;
