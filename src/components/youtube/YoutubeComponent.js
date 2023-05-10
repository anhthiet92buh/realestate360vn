import React from 'react';
import {StyleSheet, View, Dimensions} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const {width} = Dimensions.get('window');

const YoutubeComponent = ({isPlay, videoId}) => {
  const webViewProps = {
    allowsFullscreenVideo: true, // Cho phép xem toàn màn hình
    mediaPlaybackRequiresUserAction: false, // Tự động phát video khi tải lên
    scalesPageToFit: true, // Tùy chỉnh tỷ lệ phóng to/thu nhỏ trang web
    useWebKit: true, // Sử dụng WebViewKit (iOS)
    javaScriptEnabled: true, // Cho phép chạy JavaScript
    domStorageEnabled: true, // Cho phép lưu trữ dữ liệu DOM
    allowsInlineMediaPlayback: true, // Cho phép phát lại video trong nội dung trang
  };

  const initialPlayerParams = {
    fullscreen: true,
    fs: 0,
    rel: 0,
    loop: 0,
    controls: 1,
    modestbranding: 1,
    disablekb: 1,
    iv_load_policy: 3,
  };

  return (
    <View style={styles.container}>
      <YoutubePlayer
        width={width}
        height={220}
        play={isPlay}
        videoId={videoId}
        pointerEvents="none"
        loop={true}
        initialPlayerParams={initialPlayerParams}
        webViewProps={webViewProps}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default YoutubeComponent;
