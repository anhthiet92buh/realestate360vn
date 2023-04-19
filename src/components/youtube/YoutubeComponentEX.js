import React from 'react';
import {StyleSheet, View} from 'react-native';
import WebView from 'react-native-webview';

const YoutubeComponent = ({videoId}) => {
  // &play=true&autoplay=0&mute=1&showinfo=0&controls=1&fullscreen=1&modestbranding=true
  return (
    <View style={styles.container}>
      <WebView
        source={{
          uri: `https://www.youtube.com/embed/${videoId}?&mute=1&showinfo=1&controls=1&fullscreen=1&modestbranding=true&playsinline=1`,
        }}
        allowsFullscreenVideo={true}
        allowsInlineMediaPlayback={true}
        javaScriptEnabled={true} // Cho phép JavaScript trong WebView
        useWebKit={true}
        injectedJavaScript="document.getElementsByTagName('video')[0].play();"
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
