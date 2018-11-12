import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableWithoutFeedback } from 'react-native';
import { Constants } from 'expo';
import * as Animatable from 'react-native-animatable';
var LIGHTBLUE = '#4db8e2';
var DARKBLUE = '#01a0e1';
var LIGHTGREEN = '#3ff497';
var DARKGREEN = '#00ef75'

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: false,
    }
  }

  onPress = () => {
    this.setState({
      current: !this.state.current,
    })
    console.log(this.state.current);
    this.forceUpdate();
  }

  render() {
    console.log(Dimensions.get('window').width / 2);
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{
           flex: 1,
           backgroundColor: this.state.current?LIGHTGREEN:LIGHTBLUE,
           alignItems: 'center',
           justifyContent: 'center',
        }}>
          <View>
            <Image
              resizeMode="contain"
              style={styles.header}
              source={require('./assets/header.png')}
            />
          </View>
          <View
            style={{ width: '1000%' }}>
            <Image style={{
              backgroundColor: this.state.current?DARKGREEN:DARKBLUE,
               position: "absolute",
              marginTop: 60,
              height: 500, width: "100%"
            }} />
            <Animatable.View
              ref={this.handleViewRef}
              animation="slideInLeft" easing="linear" iterationCount="infinite" duration={4000} removeClippedSubviews={false}
              style={{ marginLeft: 500 }}
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
              <Image
                resizeMode="contain"
                style={styles.middle3}
                source={require('./assets/icon_main.png')}
              />
              <Image
                resizeMode="contain"
                style={styles.middle4}
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
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: LIGHTGREEN,
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
    marginLeft: -400,
    marginTop: -15,
    height: 150,
  },
  middle2: {
    position: 'absolute',
    width: '100%',
    marginLeft: -200,
    marginTop: -15,
    height: 150,
  },
  middle3: {
    position: 'absolute',
    width: '100%',
    marginLeft: 0,
    marginTop: -15,
    height: 150,
  },
  middle4: {
    position: 'absolute',
    width: '100%',
    marginLeft: 200,
    marginTop: -15,
    height: 150,
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
