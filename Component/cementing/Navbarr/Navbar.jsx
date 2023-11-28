import React from 'react';
// import { AiOutlineMenu } from "react-icons/ai";
import { useRoute, useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View , ScrollView, Button, TextInput, TouchableOpacity} from 'react-native';

const Navbar = () => {
  // const route = useRoute();
   const navigation = useNavigation();
  // consoloe.log(route)
  return (
    <View style={styles.Navbar}>
        <TouchableOpacity>
          <Text style={{color:"white",}}>
            Menu
          {/* <AiOutlineMenu size={25}/> */}
          </Text>
        </TouchableOpacity>
        <View>
        </View>
        <View style={{display:"flex", flexDirection:"row", gap: 12, alignItems:"center",}}>
            <Text style={{color:"white", fontSize: 15, fontWeight: 800}}>Alex Ifeanyi</Text>
            <TextInput 
              placeholder='Search...'
              style={styles.TextInput}/>
              <TouchableOpacity>
               <Text style={{color:"white",}}>Profile</Text>
              </TouchableOpacity>
        </View>
        <TouchableOpacity onPress={()=>{ alert("Clicked"); navigation.navigate("header")}}>
          <Text>Click</Text>
        </TouchableOpacity>

        <View style={{
          position: "absolute",
          top: 30,
          right: 6,
        }}>
          <Text>DropBar</Text>
        </View>
      
    </View>
  )
}

const styles = StyleSheet.create({
    Navbar:{
        display:"flex",
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent:'space-between',
        paddingLeft: 4,
        paddingRight: 4,
        paddingTop: 5,
        paddingBottom: 5,
        backgroundColor: "rgb(78, 116, 156)",

        // height: 20,
        // gap: 12,
        // margin: 30,
        borderWidth: 1,
        borderColor:"gray",
    },
    TextInput:{
        borderColor:"gray",
        backgroundColor:"white",
        borderWidth: 1,
        borderRadius: 7,
        width: 100,
        fontSize: 12,
        padding: 4,
        height: 30,
    }
})

export default Navbar
