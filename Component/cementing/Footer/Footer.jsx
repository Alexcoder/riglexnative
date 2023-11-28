import React from 'react';
import { StyleSheet, Text, View , ScrollView, Button, TextInput} from 'react-native';

const Footer = () => {
  return (
    <View style={styles.Footer}>
        <View>
          <Text>Footer</Text>
        </View>
        <View></View>
        <View></View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    Footer:{
        display:"flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'center',
        paddingTop: 7,
        paddingBottom: 7,
        backgroundColor: "white",

        // height: 20,
        gap: 12,
        // margin: 30,
        borderTopWidth: 0.1,
        borderTopColor:"gray",
    },
})

export default Footer
