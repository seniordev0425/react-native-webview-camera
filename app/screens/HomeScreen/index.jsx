import React from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import VideoPlayer from 'react-native-video-player';

import styles from './styles';
import images from '../../assets/images';
import videos from '../../assets/videos';

const HomeScreen = ({navigation}) => {
  const {width} = useWindowDimensions();
  const onStart = () => {
    navigation.navigate('WebviewScreen');
  };

  return (
    <View style={styles.container}>
      <StatusBar
        translucent={true}
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <View style={styles.imgContainer}>
        <Image source={images.logo} style={styles.img} />
      </View>
      <Text style={styles.introductionText}>Introduction</Text>
      <View style={styles.videoContainer}>
        <VideoPlayer
          video={videos.introduction}
          resizeMode="contain"
          hideControlsOnStart={true}
          pauseOnPress={true}
          disableControlsAutoHide={true}
        />
      </View>

      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.startBtn}
          activeOpacity={0.7}
          onPress={onStart}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
