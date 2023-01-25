import React from "react";
import { StyleSheet, View, Text, StatusBar, Image, Button,TouchableHighlight,TouchableOpacity } from 'react-native';


export default function Seeds({item}){

    return (
        
            <Text style={styles.item}>
                {item.seed}
            </Text>
        
    )
    
    

} 
const styles = StyleSheet.create({
    
    item:{
        padding:16,
        width:100,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10
    }
  });
