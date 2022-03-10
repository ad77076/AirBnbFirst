import React from 'react';
import {View,Text} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/Home';

const HomeTabNavigator=(props)=>{

const Tab=createBottomTabNavigator();

    return(
        <Tab.Navigator>
            <Tab.Screen
            name={'Explore'}
            component={HomeScreen}
            options={{tabBarIcon: ({})=><Icon name="search" size={30} color="#900" />}}/>
        </Tab.Navigator>
    );
};
export default HomeTabNavigator;