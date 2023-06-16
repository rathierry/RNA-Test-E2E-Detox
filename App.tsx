import React, {useState} from 'react';
import {
  Alert,
  Platform,
  Pressable,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';

const App = () => {
  const [input, setInput] = useState('');

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <StatusBar barStyle={'dark-content'} />

        <Text testID="title" style={styles.title}>
          E2E testing with detox on {Platform.OS}
        </Text>

        <View style={styles.spacer} />

        <TextInput
          testID="input"
          placeholder="Your text"
          value={input}
          onChangeText={setInput}
          style={styles.textInput}
        />

        <View style={styles.spacer} />

        <Pressable
          testID="button"
          style={styles.buttonContainer}
          onPress={() => Alert.alert('E2E Test', input)}>
          <Text style={styles.buttonText}>Press me</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    backgroundColor: '#F1F3FF',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 8,
  },
  title: {
    color: '#000',
    fontWeight: '700',
  },
  buttonContainer: {
    backgroundColor: '#FFF',
    borderWidth: 0.5,
    borderColor: '#5B77FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '100%',
  },
  buttonText: {
    color: '#5B77FF',
    fontSize: 16,
    fontWeight: '500',
    alignSelf: 'center',
  },
  textInput: {
    borderWidth: 0.5,
    borderColor: '#5B77FF',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
    width: '100%',
  },
  spacer: {
    marginVertical: 4,
  },
});
