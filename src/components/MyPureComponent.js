import {View, Text, StyleSheet, Button} from 'react-native';
import React from 'react';

const MyPureComponent = ({title, onPress}) => {
  console.log('Rendering MyPureComponent');
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Button title="Press me" onPress={onPress} />
    </View>
  );
};

const PureMyPureComponent = React.memo(MyPureComponent);

const styles = StyleSheet.create({
  container: {
    margin: 10,
    padding: 10,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    marginBottom: 10,
  },
});

export default PureMyPureComponent;
