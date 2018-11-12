import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <View>
          <Image
            resizeMode="contain"
            style={styles.header}
            source={require('./assets/header.png')}
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
    marginTop: -1,
    marginLeft:-100,
    height: 100,
    flexDirection: 'row',
  }
});
