import React from 'react';
import { StyleSheet, Text, View , ScrollView, Button, Dimensions} from 'react-native';


const Sidebar = () => {
  return (
    <View style={ styles.Sidebar }>
        
        <Text>Sidebar</Text>
      
    </View>
  )
}
const { width, height } = Dimensions.get('window')
const styles = StyleSheet.create({
    Sidebar:{
      position: "absolute",
      backgroundColor:"brown",
      top: 73,
      left: 0,
      bottom: 0,
      zIndex: 100000000000,
      width: 300,
      height: height,

    }
})

export default Sidebar
