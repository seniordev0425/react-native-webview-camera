import React from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from 'react-native';
import {WebView} from 'react-native-webview';
import styles from './styles';
import images from '../../assets/images';

const WebviewScreen = ({navigation}) => {
  const onBack = () => {
    navigation.navigate('HomeScreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.imgContainer}>
        <Image source={images.logo} style={styles.img} />
      </View>
      <View style={styles.webviewContainer}>
        <WebView
          source={{uri: 'https://staffplus.grpsys.com/spwebcam.html'}}
          startInLoadingState={true}
          renderLoading={() => <ActivityIndicator />}
          mediaPlaybackRequiresUserAction={false}
          allowsInlineMediaPlayback={true}
          javaScriptEnabled
          javaScriptEnabledAndroid={true}
          mixedContentMode="compatibility"
          originWhitelist={['*']}
          useWebkit
          userAgent="Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/78.0.3904.97 Safari/537.36"
        />
      </View>
      <View style={styles.footer}>
        <TouchableOpacity
          style={styles.startBtn}
          activeOpacity={0.7}
          onPress={onBack}>
          <Text style={styles.startText}>Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default WebviewScreen;
