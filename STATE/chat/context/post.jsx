import { createContext, useContext, useState, useEffect } from "react";
import { useNavigation, useRoute } from '@react-navigation/native';
import Hooks from "../../../Hooks/hooks";

export const PostContext = createContext();
const { navigate } = useNavigation();

const {     
  getItemInStorage,
} = Hooks();


export const StateContext = ({ children }) =>{
     const [profile, setProfile] = useState({
        firstName : "",
        lastName  : "",
        email     : "",
        password  : "",
        confirmPassword: "",
     });
     const[currentPostId, setCurrentPostId]= useState("");
     const[showComment, setShowComment] = useState(false);
     const[openSideBarForSmallDevice, setOpenSideBarForSmallDevice] = useState(false);
    //  const loggedIn = JSON.parse(localStorage.getItem('riglex'));
     const loggedIn = getItemInStorage("riglex");
     const user = loggedIn?.result
     const token = loggedIn?.token;


useEffect(()=>{
 getItemInStorage("riglex")
},[navigate]);


    return(
        <PostContext.Provider
         value={{
         profile,
         setProfile,
         currentPostId,
         setCurrentPostId,
         showComment, 
         setShowComment,
         openSideBarForSmallDevice,
         setOpenSideBarForSmallDevice,

        //  query,
         user,
         token,
        }}
        >
          {children} 
        </PostContext.Provider>
    )
}

export const usePostContext =()=> useContext(PostContext)