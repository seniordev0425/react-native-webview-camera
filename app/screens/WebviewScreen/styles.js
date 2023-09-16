import {StyleSheet, Platform} from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flex: 1,
  },
  imgContainer: {
    width: '100%',
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },

  footer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  startBtn: {
    width: 140,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'blue',
    borderRadius: 6,
  },
  startText: {
    fontSize: 14,
    color: 'white',
    letterSpacing: 1.5,
  },
  webviewContainer: {
    flex: 1,
  },
});

export default styles;
