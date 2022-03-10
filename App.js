
import 'react-native-gesture-handler';
import React from 'react';
import Icon from 'react-native-vector-icons/FontAwesome';
import HomeScreen from './src/screens/Home';
import Post from './src/components/Posts';
import feed from './assets/data/feed';
import SearchResults from './src/screens/SearchResults';
import DestinationSearch from './src/screens/DestinationSearch';
import Guests from './src/screens/Guests';
import Router from './src/navigation/Router';


import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground
} from 'react-native';


const App: () => Node = () => {
  

  return (
    <Router/>
  );
};


export default App;
