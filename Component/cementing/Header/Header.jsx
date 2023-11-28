import React, { useState,  } from 'react';
import { StyleSheet, Text, View , ScrollView, Button} from 'react-native';

import {styles}  from "./styles"


const Header = () => {
  const [isScrolling, setIsScrolling]= useState(true);


  return (
    <View
      // style={styles.headerxx}
      style={{
        paddingTop: 40, 
        paddingBottom: 5, 
        display: "flex", 
        flexDirection:'row', 
        justifyContent:'center',
        backgroundColor: "rgb(200, 206, 214)",
      }}>
        <Text >
          <Text
           style={styles.header_text}>
          LEX</Text> RIG OPS
        </Text>
    </View>
  )
}

export default Header
