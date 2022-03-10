import {StyleSheet, Dimensions} from 'react-native';

const styles=StyleSheet.create({
    image:{
        width: '100%',
        height: 500,
        resizeMode: 'cover',
        justifyContent: 'center'
    },
    title:{
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
    },
    button:{
        backgroundColor: '#fff',
        width: 200,
        marginLeft: 25,
        height:40,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 35,
    },
    buttonText:{
        color: 'black',
        fontWeight: 'bold'
    },
    searchButton:{
        flexDirection: 'row', 
        backgroundColor: '#fff',
        height: 55,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        width: Dimensions.get('screen').width-20,
        position: 'absolute',
        top: 10,
        marginHorizontal: 10,
        },
    searchButtonText:{
        color: 'black',
        fontWeight: 'bold'
    }
});

export default styles;