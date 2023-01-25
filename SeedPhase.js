import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList,StatusBar, Image, Button,TouchableHighlight,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import Home from './Home';
import Seeds from './Seeds';
const bip39 = require('bip39');
const ethWallet = require('ethereumjs-wallet');
export default function SeedPhase(seed){

    const [data,setData]=useState([
        {seed:'sgr',key:1},
        {seed:'varun',key:2},
        {seed:'skp',key:3},
        {seed:'football',key:4},
        {seed:'soccer',key:5},
    ])
    // const pressHandler = ()=>{
      
    //     const mnemonic = bip39.generateMnemonic();
    //     console.log(mnemonic);

      
    // }
    const submitHandler = ()=>{
      
        let addressData = ethWallet.fromPrivateKey('Your private key');
    console.log(`Private key = , ${addressData.getPrivateKeyString()}`);
    console.log(`Address = , ${addressData.getAddressString()}`);

      
    }
    
    return (
        <View style={styles.container}>
            <View style={styles.content}>
            <Text>Your Seed Phrase makes it easy to back up and restore account</Text>
            <Text style={styles.warn}>WARNING: Never disclose your Secret Recovery
                Phrase. Anyone with this phrase can take your assets forever</Text>
                <View style={styles.list}>
                    <FlatList 
                        data={data}
                        renderItem={({item}) => (
                            <Seeds item={item}/>
                        )}

                  />
                </View>
                
                <TouchableHighlight style={styles.button}>
                <Button 
                  title="Generate Address" 
                  onPress={()=>submitHandler()}
                  />
                  
                  
                </TouchableHighlight>
                
          </View>
        </View>
      );
    
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      marginTop:20
    //   justifyContent: 'center',
    },
    content: {
        
        padding:20,
        backgroundColor:'#fff',
      },
    warn:{
        fontWeight:'bold',
        marginTop:50,
    },
    item:{
        padding:16,
        marginTop:16,
        borderColor:'#bbb',
        borderWidth:1,
        borderStyle:'dashed',
        borderRadius:10,
        flexDirection:'row'
    },
    button:{
        width:200,
        backgroundColor:'#FFCC00',
        borderRadius:10,
        marginLeft:100,
        marginTop:50,
        
        
    },
  });

