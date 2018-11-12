import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions } from 'react-native';
import { Constants } from 'expo';
import * as Animatable from 'react-native-animatable';
export default class App extends React.Component {

  handleViewRef = ref => this.view = ref;

  bounce = () => this.view.slideInLeft(2000).then(endState => this.view.slideInRight(2000));

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
        <View
                  style={{ width: '1000%' }}>
          <Animatable.View
            ref={this.handleViewRef}
            animation="slideInLeft" easing="linear" iterationCount="infinite" duration={2000} removeClippedSubviews={false}
            style={{ width: '100%' }}
          >
            <Image
              resizeMode="contain"
              style={styles.middle}
              source={require('./assets/icon_main.png')}
            />
            <Image
              resizeMode="contain"
              style={styles.middle2}
              source={require('./assets/icon_main.png')}
            />
          </Animatable.View>
        </View>
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
    backgroundColor: '#53bbe3',
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
  middle: {
    position: 'absolute',
    width: '100%',
    marginLeft: (Dimensions.get('window').width / 2) * -1,
    marginBottom: 1,
    height: 200,
  },
  middle2: {
    position: 'absolute',
    width: '100%',
    marginLeft: 100,
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
