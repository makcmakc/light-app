import * as WebBrowser from 'expo-web-browser';
import * as React from 'react';
import { Image, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { MonoText } from '../components/StyledText';


import { PermissionsAndroid } from 'react-native';
import WifiManager from "react-native-wifi-reborn";

 
const granted = PermissionsAndroid.request(
      PermissionsAndroid.PERMISSIONS.ACCESS_FINE_LOCATION,
      {
        title: 'Location permission is required for WiFi connections',
        message:
          'This app needs location permission as this is required  ' +
          'to scan for wifi networks.',
        buttonNegative: 'DENY',
        buttonPositive: 'ALLOW',
      },
);
if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    // You can now use react-native-wifi-reborn

    WifiManager.getCurrentWifiSSID()
    .then((ssid) => {
      console.log("Your current connected wifi SSID is " + ssid)
    }, () => {
      console.log('Cannot get current SSID!')
    })

    console.log('Location got!!!') 

} else {
    // Permission denied
}

import { ColorPicker } from 'react-native-color-picker'
 



 
export default function HomeScreen() {
  return (
    <View style={styles.container}>
        <ColorPicker
          onColorSelected={color => alert(`Color selected: ${color}`)}
          style={styles.colorPicker}
        />
      <View style={styles.tabBarInfoContainer}>
        <Text style={styles.tabBarInfoText}>Home section</Text>
        <Text>Hi there, bro!</Text>
      </View>
    </View>
  );
}

HomeScreen.navigationOptions = {
  header: null,
};



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#512f54',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { width: 0, height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    //backgroundColor: '#fbfbfb',
    backgroundColor: '#512f54',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  colorPicker: {
    flex: 1,
  }
});
