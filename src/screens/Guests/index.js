import React, {useState} from 'react';
import {View,Text,Pressable} from 'react-native';
import styles from './styles';

const Guests=(props)=>{

    const [adults,setAdults]=useState(0);
    const [children,setChildren]=useState(0);
    const [infant,setInfant]=useState(0);

    return(
        <View>
            <View style={styles.row} >
                <View>
                    <Text style={{fontWeight:'bold'}}>Adults</Text>
                    <Text style={{color:'#8d8d8d'}}>Ages 13 or above</Text>
                </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Pressable onPress={()=>setAdults(Math.max(0,adults-1))} style={styles.button}>
                            <Text style={{fontSize:20,color:'black'}}>-</Text>
                        </Pressable> 
                        <Text style={{marginHorizontal:20,fontSize: 20,color:'black'}}>{adults}</Text>
                        <Pressable onPress={()=>setAdults(adults+1)} style={styles.button}>
                            <Text style={{fontSize:20,color:'black'}}>+</Text>
                        </Pressable>    
                        {/*value */}
                        {/*+ */}
                    </View>    
            </View>

            <View style={styles.row} >
                <View>
                    <Text style={{fontWeight:'bold'}}>Children</Text>
                    <Text style={{color:'#8d8d8d'}}>Ages 2 - 12</Text>
                </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Pressable onPress={()=>setChildren(Math.max(0,children-1))} style={styles.button}>
                            <Text style={{fontSize:20,color:'black'}}>-</Text>
                        </Pressable> 
                        <Text style={{marginHorizontal:20,fontSize: 20,color:'black'}}>{children}</Text>
                        <Pressable onPress={()=>setChildren(children+1)} style={styles.button}>
                            <Text style={{fontSize:20,color:'black'}}>+</Text>
                        </Pressable>    
                        {/*value */}
                        {/*+ */}
                    </View>    
            </View>   



            <View style={styles.row} >
                <View>
                    <Text style={{fontWeight:'bold'}}>Infants</Text>
                    <Text style={{color:'#8d8d8d'}}>Under 2</Text>
                </View>
                    <View style={{flexDirection:'row',alignItems:'center'}}>
                        <Pressable onPress={()=>setInfant(Math.max(0,infant-1))} style={styles.button}>
                            <Text style={{fontSize:20,color:'black'}}>-</Text>
                        </Pressable> 
                        <Text style={{marginHorizontal:20,fontSize: 20,color:'black'}}>{infant}</Text>
                        <Pressable onPress={()=>setInfant(infant+1)} style={styles.button}>
                            <Text style={{fontSize:20,color:'black'}}>+</Text>
                        </Pressable>    
                        {/*value */}
                        {/*+ */}
                    </View>    
            </View>       
        </View>
    );
};

export default Guests;