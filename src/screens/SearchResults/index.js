import React from 'react';
import {View,Text,FlatList,StatusBar} from 'react-native';
import Post from '../../components/Posts';
import feed from '../../../assets/data/feed';

const SearchResults=(props)=>{
    return(
        <View>
            <FlatList 
            data={feed} 
            renderItem={({item})=><Post post={item} />}/>
        </View>
    );
};

export default SearchResults;