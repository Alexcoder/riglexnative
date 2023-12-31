import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { StyleSheet, Text, View , TextInput, TouchableOpacity} from 'react-native';

const Navbar = () => {
  // const route = useRoute();
   const { navigate } = useNavigation();
   
  return (
    <View style={styles.Navbar}>
        <TouchableOpacity>
          <Text style={{color:"white",}}>
            Menu
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
