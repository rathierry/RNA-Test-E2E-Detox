import React from 'react';
import {Platform, StatusBar, StyleSheet, Text, View} from 'react-native';

const App = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'dark-content'} />
      <Text testID="title" style={styles.title}>
        E2E testing with detox on {Platform.OS}
      </Text>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    color: '#000',
  },
});
