/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View, LogBox
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player'
// import { VLCPlayer, VlCPlayerView } from 'react-native-vlc-media-player';
// import Orientation from 'react-native-orientation';

const vide = require('./assets/big_buck_bunny_720p_1mb.mp4')

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  LogBox.ignoreLogs([
    "ViewPropTypes will be removed",
    "ColorPropType will be removed",
  ])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />

      <VLCPlayer videoAspectRatio="16:9"
        style={{ width: '100%', height: 200 }}
        source={{ uri: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4" }}
        muted = {false}

        onPlaying = {() => {
          // console.log("playing")
        }}
        onBuffering ={()=> {
          console.log("Buffering")
        }}
        onError ={ (error)=>{
          console.log("Error: ", error)
        }}
      />


<VLCPlayer videoAspectRatio="16:9"
        style={{ width: '100%', height: 200 }}
        source={{ uri: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4" }}
        muted = {false}

        onPlaying = {() => {
          // console.log("playing")
        }}
        onBuffering ={()=> {
          console.log("Buffering")
        }}
        onError ={ (error)=>{
          console.log("Error: ", error)
        }}
      />

<VLCPlayer videoAspectRatio="16:9"
        style={{ width: '100%', height: 200 }}
        source={{ uri: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4" }}
        muted = {false}

        onPlaying = {() => {
          // console.log("playing")
        }}
        onBuffering ={()=> {
          console.log("Buffering")
        }}
        onError ={ (error)=>{
          console.log("Error: ", error)
        }}
      />

<VLCPlayer videoAspectRatio="16:9"
        style={{ width: '100%', height: 200 }}
        source={{ uri: "rtsp://wowzaec2demo.streamlock.net/vod/mp4:BigBuckBunny_115k.mp4" }}
        muted = {false}

        onPlaying = {() => {
          // console.log("playing")
        }}
        onBuffering ={()=> {
          console.log("Buffering")
        }}
        onError ={ (error)=>{
          console.log("Error: ", error)
        }}
      />
     
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});

export default App;
