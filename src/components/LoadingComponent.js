import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const LoadingComponent = ({color}) => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={color || '#cccccc'} />
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingVertical: 5,
  },
});
