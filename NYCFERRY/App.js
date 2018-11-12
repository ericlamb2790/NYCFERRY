import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import * as Animatable from 'react-native-animatable';
export default class App extends React.Component {
  render() {
    console.log(Dimensions.get('window').width / 2);
    return (
      <View style={styles.container}>
        <View>
          <Image
            resizeMode="contain"
            style={styles.header}
            source={require('./assets/header.png')}
          />
        </View>
        <Animatable.View
          animation="slideInLeft" easing="linear" iterationCount="infinite" duration={2000}
        >
          <Image
            resizeMode="contain"
            style={styles.middle}
            source={require('./assets/icon_main_red.png')}
          />
        </Animatable.View>
        <View
          style={styles.footerView}>
          <Image
            resizeMode="contain"
            style={styles.footer}
            source={require('./assets/footer.png')}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  header: {
    position: 'absolute',
    width: '100%',
    marginLeft: (Dimensions.get('window').width / 2) * -1,
    marginTop: ((Dimensions.get('window').height / 1.97) * -1) + Constants.statusBarHeight,
    height: 200,
  },
  middle:{
    position: 'absolute',
    width: '100%',
    marginLeft: (Dimensions.get('window').width / 2)*-1,
    marginBottom: 1,
    height: 200,
  },
  footerView: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  footer: {
    width: '100%',
    height: 115,
  }
});
