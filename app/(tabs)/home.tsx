// screens/ChatBotScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';

const questions = [
  "What is your name?",
  "How old are you?",
  "What is your favorite color?",
  "What is your hobby?"
];

const ChatBotScreen = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [messages, setMessages] = useState([{ text: questions[0], fromBot: true }]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (inputText.trim() === '') return;

    const newMessages = [
      ...messages,
      { text: inputText, fromBot: false }
    ];

    setMessages(newMessages);
    setInputText('');

    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      newMessages.push({ text: questions[currentQuestionIndex + 1], fromBot: true });
      setMessages(newMessages);
    } else {
      newMessages.push({ text: "Thank you for your answers!", fromBot: true });
      setMessages(newMessages);
    }
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={90}
    >
      <FlatList
        data={messages}
        renderItem={({ item }) => (
          <View style={[styles.message, item.fromBot ? styles.botMessage : styles.userMessage]}>
            <Text style={styles.messageText}>{item.text}</Text>
          </View>
        )}
        keyExtractor={(item, index) => index.toString()}
        contentContainerStyle={styles.messagesContainer}
      />
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          value={inputText}
          onChangeText={setInputText}
          placeholder="Type your answer..."
        />
        <Button title="Send" onPress={handleSend} />
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  messagesContainer: {
    padding: 20,
  },
  message: {
    marginBottom: 10,
    padding: 10,
    borderRadius: 5,
  },
  botMessage: {
    backgroundColor: '#e1ffc7',
    alignSelf: 'flex-start',
  },
  userMessage: {
    backgroundColor: '#d3d3d3',
    alignSelf: 'flex-end',
  },
  messageText: {
    fontSize: 16,
  },
  inputContainer: {
    flexDirection: 'row',
    padding: 10,
    borderTopWidth: 1,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    marginRight: 10,
  },
});

export default ChatBotScreen;
