import React from 'react';
import {View,Text,ImageBackground,Pressable} from 'react-native';
import styles from './styles';
import Icon from 'react-native-vector-icons/FontAwesome';

const HomeScreen=(props)=>{
    return(
        <View style={{flex:1}}>
                <ImageBackground 
                    source={require('../../../assets/images/wallpaper.jpg')}
                    style={styles.image}>

                    <Pressable 
                        style={styles.searchButton} 
                        onPress={()=>console.warn('Where')}>
                            <Icon name="search" size={18} color="#f15454" />
                            <Text style={styles.searchButtonText}>  Where are you going ?</Text>
                    </Pressable>
                     
                    <Text style={styles.title}>Go Near</Text>
                    <Pressable 
                    style={styles.button} 
                    onPress={()=>console.warn('Explore')}>
                        <Text style={styles.buttonText}>Explore nearby stays</Text>
                    </Pressable>
                </ImageBackground>
        </View>
    );
};

export default HomeScreen;