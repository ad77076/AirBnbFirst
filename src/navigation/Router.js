import React from 'react';
import {View,Text} from 'react-native';
import { createStackNavigator } from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import DestinationSearch from '../screens/DestinationSearch';
import Guests from '../screens/Guests';
import Home from '../screens/Home';
import SearchResults from '../screens/SearchResults';
import HomeTabNavigator from './Router';


const Stack=createStackNavigator();


const Router=(props)=>{
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name={'Home'} component={HomeTabNavigator} options={{headerShown:false}} />
                <Stack.Screen name={'Guests'} component={Guests} options={{title:'How many people ?'}}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Router;