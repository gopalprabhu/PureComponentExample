/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, useState} from 'react';
import {SafeAreaView, StyleSheet, Text, View} from 'react-native';

import PureMyPureComponent from './src/components/MyPureComponent';

function App(): React.JSX.Element {
  const [count, setCount] = useState(0);

  const handlePress = useCallback(() => {
    setCount(prevCount => prevCount + 1);
  }, []);
  console.log('Rendering App Component');
  return (
    <View style={styles.appContainer}>
      <Text>Count: {count}</Text>

      <PureMyPureComponent title="Hello, World!" onPress={handlePress} />
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
});

export default App;
