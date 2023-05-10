import React, {useState, useEffect} from 'react';
import {StyleSheet, View, Dimensions, BackHandler} from 'react-native';
import {observer} from 'mobx-react';
import {useNavigationState} from '@react-navigation/native';
import VerticalViewPager from 'react-native-pager-view';

import {YoutubeComponent, LoadingComponent} from '../../components';
import {useStore} from '../../context';

const {width, height = height - 50} = Dimensions.get('window');

const HomeScreen = () => {
  const indexRoute = useNavigationState(state => state?.index);

  const {
    youtubeStore: {
      ytbPlaylists,
      loadingYTBPlaylists,
      fetchYTBPlaylists,
      clearYTBPlaylists,
    },
  } = useStore();

  const [positionPage, setPositionPage] = useState(0);

  useEffect(() => {
    fetchYTBPlaylists();

    const onBackPress = () => {
      BackHandler.exitApp();
      return true;
    };
    BackHandler.addEventListener('hardwareBackPress', onBackPress);

    return () => {
      clearYTBPlaylists();
      BackHandler.removeEventListener('hardwareBackPress', onBackPress);
    };
  }, [indexRoute]);

  const onPageSelected = ({nativeEvent}) => {
    setPositionPage(nativeEvent?.position);
  };

  if (loadingYTBPlaylists) {
    return (
      <View style={styles.container}>
        <LoadingComponent color={'white'} />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <VerticalViewPager
        style={styles.vwPager}
        orientation="vertical"
        showsVerticalScrollIndicator={false}
        onPageSelected={onPageSelected}>
        {ytbPlaylists?.items?.map((item, index) => {
          const isSelected = index === positionPage;
          return (
            <View key={index?.toString()} style={styles.page_container}>
              <YoutubeComponent
                isPlay={isSelected}
                videoId={item?.snippet?.resourceId?.videoId}
              />
            </View>
          );
        })}
      </VerticalViewPager>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'black',
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
    color: 'black',
    alignSelf: 'center',
    fontSize: 22,
  },
});

export default observer(HomeScreen);
