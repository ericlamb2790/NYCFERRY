import React from 'react';
import { StyleSheet, Text, View, Image, Dimensions, TouchableWithoutFeedback, Platform, StatusBar } from 'react-native';
import { Constants, Font } from 'expo';
import * as Animatable from 'react-native-animatable';
var LIGHTBLUE = '#4db8e2';
var DARKBLUE = '#01a0e1';
var LIGHTGREEN = '#3ff497';
var DARKGREEN = '#00ef75';
var TEXTGREEN = '#007232';
var TEXTBLUE = '#064961'

function pad(num, size) {
  var s = num + "";
  while (s.length < size) s = "0" + s;
  return s;
}
let getTime = (milli) => {
  let time = new Date(milli);
  let hours = time.getUTCHours();
  let minutes = time.getUTCMinutes();
  return pad(hours, 2) + ":" + pad(minutes, 2);
}
var today = new Date();
var str = today.getFullYear() + "";
str = str.substring(2, 4);
var CURRDATE = pad(parseInt(today.getMonth() + 1), 2) + "/" + pad(today.getDate(), 2) + "/" + str;
var CURRENTTIME = getTime(today.getTime() - (300 * 60 * 1000) + (30 * 60 * 1000));
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: false,
      fontLoaded: false,
    }
  }

  async componentDidMount() {
    try {
      await Font.loadAsync({
        'Helvetica-Black': require('./assets/fonts/Helvetica-Black.otf'),
        'HelveticaNeue-Heavy': require('./assets/fonts/HelveticaNeue-Heavy.otf'),
        'Loew-Heavy': require('./assets/fonts/Loew-Heavy.otf'),
        'Montserrat': require('./assets/fonts/Montserrat.otf'),
        'MontserratBold': require('./assets/fonts/MontserratBold.otf'),
        'MontserratLight': require('./assets/fonts/MontserratLight.otf'),
        'MontserratBoldItalic': require('./assets/fonts/MontserratBoldItalic.otf'),
        'MontserratItalic': require('./assets/fonts/MontserratItalic.otf'),
      });
      this.setState({ fontLoaded: true });
      console.log('fonts are loaded');
    } catch (error) {
      console.log(error);
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
    if (Platform.OS === 'ios') {
      return (
        <TouchableWithoutFeedback onPress={this.onPress}>
          <View style={{
            flex: 1,
            backgroundColor: this.state.current ? LIGHTGREEN : LIGHTBLUE,
            alignItems: 'center',
            justifyContent: 'center',
          }}>
            <View>
              <StatusBar
                backgroundColor="blue"
                barStyle="light-content"
              />
              <Image
                resizeMode="contain"
                style={styles.headerIOS}
                source={require('./assets/headerIOS.png')}
              />
              <View style={{ width: '100%' }} >
                <Image style={{
                  backgroundColor: this.state.current ? DARKGREEN : DARKBLUE,
                  position: "absolute",
                  marginTop: 20,
                  height: 700, width: "1000%",
                  marginLeft: -200,
                }} />
                {
                  this.state.fontLoaded ? (
                    <Text style={styles.passIOS}>
                      ONE-WAY PASS
              </Text>
                  ) : null
                }

                <Animatable.View
                  ref={this.handleViewRef}
                  animation="slideInLeft" easing="linear" iterationCount="infinite" duration={4000} removeClippedSubviews={false}
                  style={{ marginLeft: -100 }}
                >
                  <Image
                    resizeMode="contain"
                    style={styles.middleIOS}
                    source={require('./assets/icon_main.png')}
                  />
                  <Image
                  resizeMode="contain"
                  style={styles.middle1IOS}
                  source={require('./assets/icon_main.png')}
                />
                  <Image
                    resizeMode="contain"
                    style={styles.middle2IOS}
                    source={require('./assets/icon_main.png')}
                  />
                  <Image
                    resizeMode="contain"
                    style={styles.middle3IOS}
                    source={require('./assets/icon_main.png')}
                  />
                  <Image
                    resizeMode="contain"
                    style={styles.middle4IOS}
                    source={require('./assets/icon_main.png')}
                  />

                </Animatable.View>
              </View>
              <View
                style={styles.footerViewIOS}>
                <Image style={{
                  backgroundColor: '#FFFFFF',
                  position: "absolute",
                  marginTop: 5,
                  height: 1, width: "100%"
                }} />
                <Image
                  resizeMode="contain"
                  style={styles.footerIOS}
                  source={require('./assets/footerIOS.png')}
                />
                {
                  this.state.fontLoaded ? (
                    <Text style={{
                      fontSize: 28,fontWeight:'bold', color: '#fdfffd', position: "absolute",
                      marginTop: 30,
                      letterSpacing:1,
                      marginLeft: ((Dimensions.get('window').width / 2) - 98),
                      height: 50, width: "105%"
                    }}>
                      {CURRDATE} {CURRENTTIME}
                    </Text>
                  ) : null
                }
                <Text style={{
                  fontSize: 11, fontWeight: 'bold',
                  color: this.state.current ? TEXTGREEN : TEXTBLUE,
                  position: "absolute",
                  marginTop: -38,
                  marginLeft: ((Dimensions.get('window').width / 2) + 88),
                  height: 50, width: "100%"
                }}>
                  SHOW {'\n '}
                  CODE
          </Text>
                <Image resizeMode="contain"
                  style={styles.qrIOS}
                  source={require('./assets/qrIOS.png')}>
                </Image>
              </View>
            </View>
          </View>
        </TouchableWithoutFeedback>
      );
    }
    else
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
              {
                this.state.fontLoaded ? (
                  <Text style={styles.pass}>
                    ONE-WAY PASS
              </Text>
                ) : null
              }


            </View>
            <View
              style={{ width: '1000%' }}>
              <Image style={{
                backgroundColor: '#FFFFFF',
                position: "absolute",
                marginTop: -182,
                height: 2, width: "100%"
              }} />
              <Image style={{
                backgroundColor: '#F2F2F2',
                position: "absolute",
                marginTop: -415,
                height: 63, width: "100%"
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
              {
                this.state.fontLoaded ? (
                  <Text style={{
                    fontSize: 21, fontFamily: 'Loew-Heavy', color: '#fdfffd', position: "absolute",
                    marginTop: 13,
                    marginLeft: ((Dimensions.get('window').width / 2) - 85),
                    height: 50, width: "100%"
                  }}>
                    {CURRDATE} at {CURRENTTIME}
                  </Text>
                ) : null
              }

              <Text style={{
                fontSize: 15, fontWeight: 'bold',
                color: this.state.current ? TEXTGREEN : TEXTBLUE,
                position: "absolute",
                marginTop: -50,
                marginLeft: ((Dimensions.get('window').width / 2) + 45),
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
  pass: {
    fontSize: 30,
    fontFamily: "Loew-Heavy", color: '#fdfffd', position: "absolute",
    marginTop: 37,
    letterSpacing: -1,
    marginLeft: ((Dimensions.get('window').width / 2) - 123),

  },
  passIOS: {
    fontSize: 40,
    fontFamily: "Helvetica-Bold", color: '#fdfffd', position: "absolute",
    marginTop: -2,
    letterSpacing: -1,
    marginLeft: ((Dimensions.get('window').width / 2) - 330),

  },
  header: {
    position: 'absolute',
    width: '100%',
    marginLeft: (Dimensions.get('window').width / 2) * -1,
    marginTop: ((Dimensions.get('window').height / 2) * -1),
    height: 200,
  },
  headerIOS: {
    position: 'absolute',
    width: '100%',
    marginLeft: (Dimensions.get('window').width / 2) * -1,
    marginTop: ((Dimensions.get('window').height / 2) * -1 - (10)),
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
    marginLeft: 190,
    marginTop: -13,
    height: 150,
  },
  middleIOS: {
    position: 'absolute',
    width: '105%',
    marginLeft: -130,
    marginTop: -55,
    opacity: 0.7,
    height: 150,
  },
  middle1IOS: {
    position: 'absolute',
    width: '105%',
    marginLeft: 0,
    marginTop: -55,
    opacity: 0.7,
    height: 150,
  },
  middle2IOS: {
    position: 'absolute',
    width: '105%',
    marginLeft: 130,
    marginTop: -55,
    opacity: 0.7,
    height: 150,
  },
  middle3IOS: {
    position: 'absolute',
    width: '105%',
    marginLeft: 260,
    marginTop: -55,
    opacity: 0.7,
    height: 150,
  },
  middle4IOS: {
    position: 'absolute',
    width: '105%',
    marginLeft: 390,
    marginTop: -55,
    opacity: 0.7,
    height: 150,
  },
  qr: {
    position: 'absolute',
    width: '100%',
    right: -150,
    marginTop: -110,
    height: 100,
  },
  qrIOS: {
    position: 'absolute',
    width: '100%',
    right: (-Dimensions.get('window').width / 2)+(30),
    marginTop: -55,
    height: 60,
  },
  footerView: {
    position: 'absolute',
    width: '100%',
    bottom: 0,
  },
  footerViewIOS: {
    position: 'absolute',
    width: '100%',
    bottom: (-Dimensions.get('window').height / 2) - (5),
    marginLeft: (Dimensions.get('window').width / 2) * -1,
  },
  footer: {
    width: '100%',
    height: 115,
  },
  footerIOS: {
    width: '100%',
    height: 115,
  }
});

