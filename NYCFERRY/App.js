import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableWithoutFeedback, StatusBar } from 'react-native';
import { Constants } from 'expo';
import * as Animatable from 'react-native-animatable';
var LIGHTBLUE = '#4db8e2';
var DARKBLUE = '#01a0e1';
var LIGHTGREEN = '#3ff497';
var DARKGREEN = '#00ef75';
var TEXTGREEN = '#007232';
var TEXTBLUE = '#064961'

function pad(num, size) {
  var s = num+"";
  while (s.length < size) s = "0" + s;
  return s;
}
let getTime = (milli) => {
  let time = new Date(milli);
  let hours = time.getUTCHours();
  let minutes = time.getUTCMinutes();
  return pad(hours,2) + ":" + pad(minutes,2);
}
var today = new Date();
var CURRDATE =  parseInt(today.getMonth() + 1) + "/" + today.getDate() + "/" + today.getFullYear();
var CURRENTTIME = getTime(today.getTime()-(300*60*1000)+(30*60*1000));
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
    return (
      <TouchableWithoutFeedback onPress={this.onPress}>
        <View style={{
          flex: 1,
          backgroundColor: this.state.current ? LIGHTGREEN : LIGHTBLUE,
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
          <View style={{ width: '100%' }} >
              <Image style={{
                backgroundColor: this.state.current ? DARKGREEN : DARKBLUE,
                position: "absolute",
                marginTop: 60,
                height: 500, width: "100%"
              }} />
              <Text style={{
                fontSize: 32, fontWeight: 'bold', color: '#fdfffd', position: "absolute",
                marginTop: 37,
                marginLeft: ((Dimensions.get('window').width / 2) - 110),
                height: 50, width: "100%"
              }}>
                ONE-WAY PASS
          </Text>
            </View>
          <View
            style={{ width: '1000%' }}>
            <Image style={{
              backgroundColor: '#FFFFFF',
              position: "absolute",
              marginTop: -173,
              height: 2, width: "100%"
            }} />
            <Image style={{
              backgroundColor: '#FFFFFF',
              position: "absolute",
              marginTop: -388,
              height: 28, width: "100%"
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
            <Image style={{
              backgroundColor: '#FFFFFF',
              position: "absolute",
              marginTop: -2,
              height: 10, width: "100%"
            }} />
            <Image
              resizeMode="contain"
              style={styles.footer}
              source={require('./assets/footer.png')}
            />
              <Text style={{
                fontSize: 24, fontWeight: 'bold', color: '#fdfffd', position: "absolute",
                marginTop: 13,
                marginLeft: ((Dimensions.get('window').width / 2) - 110),
                height: 50, width: "100%"
              }}>
                {CURRDATE} at {CURRENTTIME}
          </Text>

          <Text style={{
                fontSize: 15, fontWeight: 'bold', 
                color: this.state.current ? TEXTGREEN : TEXTBLUE,                
                position: "absolute",
                marginTop: -50,
                marginLeft: ((Dimensions.get('window').width / 2)+45),
                height: 50, width: "100%"
              }}>
                SHOW {'\n '}
                  CODE
          </Text>
          <Image resizeMode="contain"
                style={styles.qr}
                source={require('./assets/qr.png')}>
            </Image>

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
    marginTop: -13,
    height: 150,
  },
  middle2: {
    position: 'absolute',
    width: '100%',
    marginLeft: -200,
    marginTop: -13,
    height: 150,
  },
  middle3: {
    position: 'absolute',
    width: '100%',
    marginLeft: 0,
    marginTop: -13,
    height: 150,
  },
  middle4: {
    position: 'absolute',
    width: '100%',
    marginLeft: 200,
    marginTop: -13,
    height: 150,
  },
  qr: {
    position: 'absolute',
    width: '100%',
    right:-150,
    marginTop: -110,
    height: 100,
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

