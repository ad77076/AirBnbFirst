import React, {useState} from 'react';
import {View,Text,TextInput,Button,FlatList} from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import Icon from 'react-native-vector-icons/FontAwesome';


const DestinationSearch=(props)=>{

    const [inputText,setInputText]=useState('');

    return(
        <View style={styles.container}>
            <TextInput 
            style={styles.textInput}
            placeholder='Where are you going ?'
            value={inputText}
            onChangeText={setInputText}/>
            <FlatList data={searchResults}
            renderItem={({item})=>(
            <View style={styles.row}>
                <View style={styles.iconContainer}>
                <Icon name="home" size={27} color="#000000" />
                </View>    
                <Text style={styles.locationText}>  {item.description}</Text>
            </View>
            )}/>
            
            
        </View>
    );
};

export default DestinationSearch;