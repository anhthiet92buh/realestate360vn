import React, {useState} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
// import VerticalViewPager from "react-native-vertical-view-pager";
import VerticalViewPager from 'react-native-pager-view';
// import Video from 'react-native-video';

import {YoutubeComponent} from '../../components';

const {width, height = height - 50} = Dimensions.get('window');

const data = [
  {
    uri: 'rVZTmJIU3EI',
    bg_color: 'red',
  },
  {
    uri: 'rVZTmJIU3EI',
    bg_color: 'blue',
  },
  {
    uri: 'rVZTmJIU3EI',
    bg_color: 'pink',
  },
  {
    uri: 'rVZTmJIU3EI',
    bg_color: 'orange',
  },
];
const HomeScreen = () => {
  const [positionPage, setPositionPage] = useState(0);

  // return (
  //   <YoutubeComponent videoId={"rVZTmJIU3EI"} />
  // )

  const onPageSelected = ({nativeEvent}) => {
    setPositionPage(nativeEvent?.position);
  };

  return (
    <View style={styles.container}>
      <VerticalViewPager
        style={styles.vwPager}
        orientation="vertical"
        showsVerticalScrollIndicator={false}
        onPageSelected={onPageSelected}>
        {data?.map((item, index) => {
          const isSelected = index === positionPage;
          return (
            <View
              key={index?.toString()}
              style={[
                styles.page_container,
                {
                  // backgroundColor: item.bg_color,
                },
              ]}>
              {/* <View style={styles.video}>
                  <Video
                    source={{
                      //  uri: "https://drive.google.com/file/d/1dO3vE8iOz8xoikcNeaJYhbQsUv3kbOgJ/view"
                      // uri: "http://d23dyxeqlo5psv.cloudfront.net/big_buck_bunny.mp4"
                      // uri: item.video_url
                      uri: `https://www.youtube.com/embed/${item}`
                    }}
                    rate={1.0}
                    volume={1.0}
                    isMuted={true}
                    resizeMode="contain"
                    shouldPlay
                    bounce={false}
                    isLooping
                    style={styles.videoPlayer}
                    useNativeControls={false}
                  />
                </View> */}
              <YoutubeComponent isPlay={isSelected} videoId={item?.uri} />
              <Text style={styles.txtScreen}>{`Screen ${index + 1}`}</Text>
            </View>
          );
        })}
      </VerticalViewPager>
    </View>
  );
};

const styles = StyleSheet.create({
  // container: {
  //   flex: 1,
  // },
  container: {
    width: '100%',
    height,
    backgroundColor: 'black',
    zIndex: 1,
    alignSelf: 'stretch',
  },
  vwPager: {
    flex: 1,
  },
  page_container: {
    flex: 1,
    width,
    height,
  },
  video: {
    width: '100%',
    flex: 1,
    zIndex: 2,
  },
  videoPlayer: {
    width: '100%',
    zIndex: 2,
    flex: 1,
  },
  txtScreen: {
    color: 'white',
    alignSelf: 'center',
    fontSize: 22,
  },
});

export default HomeScreen;
