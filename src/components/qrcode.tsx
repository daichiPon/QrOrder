"use client";
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { FC } from "react";
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RouteProp } from '@react-navigation/native';
import { CompositeNavigationProp } from '@react-navigation/native';
import { Text } from "react-native";


type QRCodeProps={
  route: RouteProp<any, 'Menew'>;
  navigation: CompositeNavigationProp<any, any>;
}

const QRCode: FC<QRCodeProps> = () => {
  return (
    <Text>注文メニュー</Text>
  );
};

export default QRCode;