import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions, Text} from 'react-native';
import {observer} from 'mobx-react';
import VerticalViewPager from 'react-native-pager-view';

import {YoutubeComponent, LoadingComponent} from '../../components';
import {useStore} from '../../context';

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
  const {
    youtubeStore: {ytbVideos, loadingYTBVideos, fetchYTBVideos, clearYTBVideos},
  } = useStore();

  const [positionPage, setPositionPage] = useState(0);

  useEffect(() => {
    fetchYTBVideos();

    return () => {
      clearYTBVideos();
    };
  }, []);

  const onPageSelected = ({nativeEvent}) => {
    setPositionPage(nativeEvent?.position);
  };

  if (loadingYTBVideos) {
    return <LoadingComponent />;
  }

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
            <View key={index?.toString()} style={styles.page_container}>
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

export default observer(HomeScreen);
