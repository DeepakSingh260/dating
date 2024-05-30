import ChatBotScreen from "./messaging";
import React from "react";
import { useState } from "react";
import { View } from "react-native";
export default function HomeScreen ()  {
  const [ showMessage, setShowMessage ] = useState(true);
  return (
    <View>
      {showMessage && <ChatBotScreen />}
    </View>
  )
}