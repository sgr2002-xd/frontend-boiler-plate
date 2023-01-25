import React from "react";
import { StyleSheet, View, Text, StatusBar, Image, Button,TouchableHighlight,TouchableOpacity } from 'react-native';


export default function Address({item}){

    console.log(item);

    return (
        
            <Text style={styles.item}>
                {item}
            </Text>
        
    )
    
    

} 