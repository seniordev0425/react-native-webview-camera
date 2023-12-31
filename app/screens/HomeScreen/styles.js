import {StyleSheet, Platform, Dimensions} from 'react-native';

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
  introductionText: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'black',
    letterSpacing: 2,
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
    backgroundColor: 'green',
    borderRadius: 6,
    marginTop: 20,
  },
  startText: {
    fontSize: 14,
    color: 'white',
    letterSpacing: 1.5,
  },
  videoContainer: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 20,
    height: Dimensions.get('window').height * 0.45,
  },
  video: {
    width: '90%',
    height: '90%',
  },
  url: {
    borderWidth: 1,
    height: 40,
    borderRadius: 4,
    width: '70%',
  },
});

export default styles;
