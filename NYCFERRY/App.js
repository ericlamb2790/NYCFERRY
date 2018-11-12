import React from 'react';
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import {Constants} from 'expo';
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
  header:{
    position: 'absolute',
    width: '100%',
    marginLeft: (Dimensions.get('window').width / 2)*-1,
    marginTop: ((Dimensions.get('window').height / 1.97)*-1)+Constants.statusBarHeight,
    height: 200,
  },
  footerView:{
    marginTop:100,
  },
  footer:{
    position: 'absolute',
    width: '100%',
    marginLeft: (Dimensions.get('window').width / 2)*-1,
    marginBottom: 1,
    height: 200,
  }
});
