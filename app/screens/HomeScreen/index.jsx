import React, {useState} from 'react';
import {
  View,
  Text,
  StatusBar,
  Image,
  TouchableOpacity,
  useWindowDimensions,
  TextInput,
  ScrollView,
  KeyboardAvoidingView,
} from 'react-native';
import VideoPlayer from 'react-native-video-player';

import styles from './styles';
import images from '../../assets/images';
import videos from '../../assets/videos';
import {isValidHttpUrl} from './helper';

const HomeScreen = ({navigation}) => {
  const {width} = useWindowDimensions();
  const [url, setUrl] = useState('');

  const onStart = () => {
    navigation.navigate('WebviewScreen', {url});
  };

  return (
    <ScrollView style={styles.container}>
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
        <TextInput
          value={url}
          onChangeText={setUrl}
          style={styles.url}
          inputMode="url"
        />
        <TouchableOpacity
          disabled={!isValidHttpUrl(url)}
          style={{...styles.startBtn, opacity: isValidHttpUrl(url) ? 1 : 0.7}}
          activeOpacity={0.7}
          onPress={onStart}>
          <Text style={styles.startText}>Start</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
