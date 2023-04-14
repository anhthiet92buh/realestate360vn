import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

const YoutubeComponent = () => {
  return (
    <View style={styles.container}>
      <WebView
        source={{uri: 'https://www.youtube.com/embed/REwfPnF_txk'}}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default YoutubeComponent;
