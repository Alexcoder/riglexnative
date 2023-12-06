import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import Hook from '../../../Hooks/cementingHooks';

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
    // { page: "Chat", route: "chat", },
    { page: "Plug", route: "plugjob", },
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
        paddingTop: 6,
        paddingBottom:  6,
        paddingLeft: 6,
        paddingRight:  6,
        backgroundColor: "lightgray",

        // height: 20,
        gap: 12,
        // margin: 30,
        borderTopWidth: 0.1,
        borderTopColor:"gray",
    },
})

export default Footer
