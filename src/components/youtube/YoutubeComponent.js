import React from 'react';
import {StyleSheet, View} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';

const YoutubeComponent = ({isPlay, videoId}) => {
  const webViewProps = {
    allowsFullscreenVideo: true, // Cho phép xem toàn màn hình
    mediaPlaybackRequiresUserAction: false, // Tự động phát video khi tải lên
    // scalesPageToFit: true, // Tùy chỉnh tỷ lệ phóng to/thu nhỏ trang web
    // useWebKit: true, // Sử dụng WebViewKit (iOS)
    javaScriptEnabled: true, // Cho phép chạy JavaScript
    domStorageEnabled: true, // Cho phép lưu trữ dữ liệu DOM
    allowsInlineMediaPlayback: true, // Cho phép phát lại video trong nội dung trang
  };

  return (
    <View style={styles.container}>
      <YoutubePlayer
        height={300}
        play={isPlay}
        videoId={videoId}
        playList={'PLjYlQADz2lAK_RusL5Nxsr3JtlnFpy8AE'}
        pointerEvents="none"
        fullscreen={true}
        loop={true}
        initialPlayerParams={{
          fullscreen: true,
          fs: 0,
          loop: 1,
          // controls:false,
          showClosedCaptions: true,
          modestbranding: true,
          rel: true,
        }}
        webViewProps={webViewProps}
        allowPictureInPicture={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    // flex: 1,
  },
});

export default YoutubeComponent;
