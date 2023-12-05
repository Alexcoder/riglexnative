import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import Hook from '../../../Hooks/hooks';

const Footer = () => {
  const { navigation } = Hook();
  const [selectedRoute, setSelectedRoute] = useState('')

  const handleNavigate =(item)=>{
   navigation.navigate(item.route);
   setSelectedRoute(item.route)
  };

  const handleClickRouteColor = (item)=>{
    if(item.route===selectedRoute){
      return {
        color:"blue",
        fontWeight: 700,
      }
    }else {
      return {
        color:"black",
        fontWeight: 700,
      }
    }
  }

  const link = [
    { page: "CasingJob", route: "casingjob" },
    { page: "Chat", route: "chat", },
  ];

  return (
    <View style={styles.Footer}>
      {
        link.map((item)=>(
          <View key={item.page}>
           <TouchableOpacity
             onPress={()=> handleNavigate(item)}>
              <Text style={ handleClickRouteColor(item) }>{item.page}</Text>
           </TouchableOpacity>
          </View>
        ))
      }      
    </View>
  )
}

const styles = StyleSheet.create({
    Footer:{
        display:"flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingTop: 12,
        paddingBottom:  12,
        paddingLeft: 2,
        paddingRight:  2,
        backgroundColor: "white",

        // height: 20,
        gap: 12,
        // margin: 30,
        borderTopWidth: 0.1,
        borderTopColor:"gray",
    },
})

export default Footer
