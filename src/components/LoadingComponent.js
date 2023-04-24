import React from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';

const LoadingComponent = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="small" color="#cccccc" />
    </View>
  );
};

export default LoadingComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    paddingVertical: 5,
  },
});
