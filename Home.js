import React from 'react';
import { StyleSheet, View, Text, StatusBar, Image, Button,TouchableHighlight } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'; 
import SeedPhase from './SeedPhase';




export default function Home ({navigation}) {
   // generates a 12-word seed phrase
  //       console.log(mnemonic);
  // 
  
  
  
    return(
      
        <View style={styles.container}>
          <View style={styles.content}>
          <Text style={styles.mainText}>Get the World's first non-custodial cypher card</Text>
          <Text style={styles.subText}>Explore all of Web3 in one place</Text>
                <View style={styles.item}>
                <Image source={require('./assets/swap.png')} style={styles.image}/>
                <Text style={styles.itemText}>Explore all of Web3 in one place</Text>
                </View>
                <View style={styles.item}>
                <Image source={require('./assets/buy.png')} style={styles.image}/>
                <Text style={styles.itemText}>Buy at an affordable price</Text>
                </View>
                <View style={styles.item}>
                <Image source={require('./assets/chain.png')} style={styles.image}/>
                <Text style={styles.itemText}>9 Chains Supported more coming soon</Text>
                </View>
                <View style={styles.item}>
                <Image source={require('./assets/browser.png')} style={styles.image}/>
                <Text style={styles.itemText}>Accepted all over the world</Text>
                </View>
                
                <TouchableHighlight style={styles.button}>
                <Button 
                  title='Create New Wallet' color='White'
                  onPress={() => navigation.navigate('SeedPhase')}   
                  />
                  
                  
                </TouchableHighlight>
          
          </View>
          
        </View>
        
        // <View style={styles.container}>
        //   <View style={styles.content}>
        //   <Text style={styles.subText}>Your Seed Phrase makes it easy to back up and restore account</Text>
        //   <TouchableHighlight style={styles.button}>
        //         <Button 
        //            title='Confirm' color='White'
        //           onPress={()=>navigation.navigate('SeedPhase')}
        //           />
                  
                  
        //   </TouchableHighlight>
        //   </View>
          
              
        // </View>
    )
}

const styles = StyleSheet.create({
    container: {
      // flex: 1,
      flexDirection: 'row',
      // backgroundColor: '#fff',
      //  alignItems: 'center',
      flex: 1,
      backgroundColor: '#fff',
    },
    
    content: {
      // justifyContent: 'center',
      // alignItems: 'center',
      // alignSelf: 'center',
      padding:20,
    },
    item:{
      flex:1,
      paddingTop:5,
      marginTop:50,
      flexDirection:'row',
      alignItems:'center',
      justifyContent:'space-between',
      // flexWrap:'wrap',
      alignSelf:'center'
  },
  image:{
    width: 100,
    height: 50,
    resizeMode: 'contain',
  },
  itemText:{
    // textAlign:'center',
    fontWeight:'normal'
  },
  button:{
    width:200,
    backgroundColor:'#FFCC00',
    borderRadius:10,
    marginLeft:100,
    marginTop:50,
    
    
},
    
    mainText: {
      fontSize: 20,
      fontWeight: 'bold',
      textAlign: 'center',
      marginTop:20
    },
    subText:{
      fontSize:16,
      textAlign: 'center',
      marginTop:20

    },
    buttonView:{
      marginTop:100,
      
    }
    
  });