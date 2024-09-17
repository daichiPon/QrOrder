"use client";
import React, { useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import { FC } from "react";
import {TextInput} from "react-native"

interface QRCodeProps {
  url: string;
}

const QRCode: FC<QRCodeProps> = (props) => {
    const [tableNumber,setTableNumber] = useState<number[]>([]);
  return (
    <QRCodeSVG
        
      value={props.url}
      size={128}
      bgColor={"#000000"}
      fgColor={"#FFFFFF"}
      level={"M"}
      imageSettings={{
        src: "/favicon.ico",
        x: undefined,
        y: undefined,
        height: 24,
        width: 24,
        excavate: true,
      }}
    />
  );
};

export default QRCode;