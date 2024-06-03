import ChatBotScreen from "./messaging";
import React from "react";
import { StyleSheet } from "react-native";
import { useState } from "react";
import { View } from "react-native";
export default function HomeScreen ()  {
  const [ showMessage, setShowMessage ] = useState(true);
  return (
    <View style={styles.container}>
      {showMessage && <ChatBotScreen />}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  chatBot: {
    flex: 1,
  },
});