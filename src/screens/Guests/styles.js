import React from 'react';
import {StyleSheet} from 'react-native';

const styles=StyleSheet.create({
    button:{
        borderWidth: 1,
        width: 40,
        height: 40,
        borderRadius: 20,
        borderColor: '#676767',
        justifyContent: 'center',
        alignItems: 'center'

    },
    row:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',
        padding: 30,
        marginHorizontal: 10,
        borderBottomWidth: 1,
        borderColor: 'lightgrey'
        }
});

export default styles;