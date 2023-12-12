import React, { useState } from 'react';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Footer = () => {
  const navigation = useNavigation();
  const [selectedRoute, setSelectedRoute] = useState('')

  const handleNavigate =(item)=>{
   navigation.navigate(item.link);
   setSelectedRoute(item.link)
  };

  const handleClickRouteColor = (item)=>{
    if(item.link===selectedRoute){
      return {
        color:"blue",
        fontWeight: 700,
        fontSize: 11,
      }
    }else {
      return {
        color:"black",
        fontWeight: 700,
        fontSize: 11,
      }
    }
  }

  const link = [
    { page: "CasingJob", link: "casingjob" },
    // { page: "Chat", link: "chat", },
    { page: "Plug", link: "plugjob", },
    { page: "Conversion", link: "conversion", },
    { page: "Quiz", link: "quiz", },
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
