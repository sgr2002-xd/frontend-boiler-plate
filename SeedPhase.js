import React, { useState } from 'react';
import { StyleSheet, View, Text, FlatList,StatusBar, Image, Button,TouchableHighlight,TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import Home from './Home';
import Seeds from './Seeds';
var HDKey = require('hdkey');
const bip39 = require('bip39');
const ethWallet = require('ethereumjs-wallet');
const { hdkey } = require('ethereumjs-wallet')
const mnemonic = bip39.generateMnemonic();
export default function SeedPhase(seed){


    const [data,setData]=useState([])
    const getKey=()=>{
        var seed1 = data[0];
        var seed2 = data[1];
        var seed3 = data[3]
        var hdkey1 = HDKey.fromMasterSeed(Buffer.from(seed1, 'hex'));
        console.log(hdkey1.privateExtendedKey);
    }
    const submitHandler = ()=>{
      
    
    console.log(mnemonic.split(' '));
    var mnemonic_list=mnemonic.split(' ');
    setData([...mnemonic_list])
    console.log(data)
    navigation.navigate('Address');

    // let addressData = ethWallet.fromPrivateKey(data[0]);
    // console.log(`Private key = , ${addressData.getPrivateKeyString()}`);
    // console.log(`Address = , ${addressData.getAddressString()}`);
    
      
    }
    const [dummy,setDummy]=useState([
        {seed:'****',key:1},
        {seed:'****',key:2},
        {seed:'****',key:3},
        {seed:'****',key:4},
        {seed:'****',key:5},
        {seed:'****',key:6},
        {seed:'****',key:7},
        {seed:'****',key:8},
        {seed:'****',key:9},
        {seed:'****',key:10},
        {seed:'****',key:11},
        {seed:'****',key:12},
    ])
    
    
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
                  title="See Your Mnmonics" 
                  onPress={()=>submitHandler()}
                  />
                  
                  
                </TouchableHighlight>
                <TouchableHighlight style={styles.button}>
                <Button 
                  title="Generate Address" 
                  onPress={()=>getKey()}
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

