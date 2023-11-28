import React, { useState } from 'react';
// import {useNavigate, useLocation} from "react-router-dom";
import { CgProfile } from "react-icons/cg";
import { BsSearch } from "react-icons/bs";
import { GrNotification } from "react-icons/gr";
// import { BiHome } from "react-icons/bi";
import { AiOutlineMenu } from "react-icons/ai";
import DropBar from './Children/Dropbar';
import {styles} from "./Styles.jsx";
import { usePostContext } from '../../../STATE/chat/context/post';
import { StyleSheet, Text, View , ScrollView, Button} from 'react-native';


const Navbar = () => {
  // const navigate = useNavigate();
  const { setOpenSideBarForSmallDevice, user } = usePostContext();
  const [dropBar, setDropBar] =  useState(false);
  // const { pathname } = useLocation();
  // const user = true;
  

  return (
    <View style={styles.navbar_container}>

          {/* <View onClick={()=> setOpenSideBarForSmallDevice(prev=> !prev)}> <AiOutlineMenu size={25}/></View> */}
        
        <Text style={styles.navbar_icon_group}>
          {/* { user &&
            <View style={styles.navbar_username}>
              {`${user?.firstName.charAt(0)}`}
              {`${user?.lastName.charAt(0)}`}
            </View>
          } */}
          <Text style={styles.navbar_search}> 
            {/* <input 
              style={styles.navbar_search_input}
             placeholder="Search ..."/> */}
            <BsSearch style={{marginTop:"0.5rem", color:"black" }}/> 
          </Text>
          <Text onClick={()=> setDropBar(!dropBar)} >
            <CgProfile size={22} style={{marginTop:"0.5rem"}}/>
          </Text>
        </Text>  
       {/* { (dropBar && pathname!=="/login") && 
        <DropBar 
          setDropBar={setDropBar} 
          navigate={navigate}/>
       } */}
    </View>
  )
}

export default Navbar
