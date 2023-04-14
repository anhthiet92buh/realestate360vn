import React from 'react';
import {StyleSheet, View} from 'react-native';

import {YoutubeComponent} from '../../components';

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <YoutubeComponent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default HomeScreen;
